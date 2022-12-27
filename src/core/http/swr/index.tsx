import {multipleRequest, request} from '@request';
import {useCallback, useEffect, useRef, useState} from 'react';
import useSWR, {
  Key,
  Middleware,
  MutatorOptions,
  SWRConfiguration,
  SWRHook,
  SWRResponse,
  useSWRConfig,
} from 'swr';
import useSWRImmutable from 'swr/immutable';
import {authHeader} from '../request/helper';
import {MutationStatus} from './swr.types';


/**
 * mutation hook using swr to mutate data from server. Default method is POST.
 * You can use either mutate or mutateAsync to mutate data.
 * When using mutate, you can pass in a callback function to mutate the data.
 * When using mutateAsync, you have to handling the error yourself.
 *
 *
 * ### example:
 * ```tsx
 * const {mutate, isLoading} = useRequest<BodyType, ResponseType>(
 *    'api/product/1',
 *    {method: 'put'}
 * );
 * ...
 * ...
 * <Button
 *    onPress={() => mutate({title: 'New Soap Brand', price: 10000})}
 *    loading={isLoading}
 * />
 * ```
 */
export function useRequest<Data = any, Response = any, Error = any>(
  url: string,
  options: MutatorOptions<Data> & {
    method?: 'post' | 'put' | 'patch' | 'delete';
    onSuccess?: (data: Response, variable?: Data) => void;
    onError?: (error: Error) => void;
    onSettled?: () => void;
  } = {},
) {
  const [status, setStatus] = useState<MutationStatus>(MutationStatus.Idle);
  const isIdle = status === MutationStatus.Idle;
  const isLoading = status === MutationStatus.Loading;
  const isError = status === MutationStatus.Error;
  const isSuccess = status === MutationStatus.Success;
  const mutateAsync = useCallback(
    async (data?: Data): Promise<Response> => {
      try {
        setStatus(MutationStatus.Loading);

        const response = await request(url, {
          body: JSON.stringify(data),
          method: options.method || 'post',
        });

        setStatus(MutationStatus.Success);

        return response;
      } catch (e: unknown) {
        setStatus(MutationStatus.Error);

        throw e as Error;
      }
    },
    [options.method, url],
  );

  const mutate = useCallback(
    (
      data?: Data,
      handler?: {
        onSuccess?: (data: Response, variable?: Data) => void;
        onError?: (error: Error) => void;
        onSettled?: () => void;
      },
    ) => {
      mutateAsync(data)
        .then((response) => {
          options.onSuccess?.(response, data);
          handler?.onSuccess?.(response, data);
        })
        .catch((error) => {
          options.onError?.(error);
          handler?.onError?.(error);
        })
        .then(() => {
          options.onSettled?.();
          handler?.onSettled?.();
        });
    },
    [mutateAsync, options],
  );

  return {
    isLoading,
    isError,
    isSuccess,
    isIdle,
    mutate,
    mutateAsync,
  };
}

interface QueryConfiguration<TData, TError>
  extends SWRConfiguration<TData, TError> {
  immutable?: boolean;
  enabled?: boolean;
}

export interface QueryResult<TData, TError> extends SWRResponse<TData, TError> {
  isLoading: boolean;
}

export function useQuery<TData, TError = void>(
  urlKey: Key,
  config: QueryConfiguration<TData, TError> = {},
): QueryResult<TData, TError> {
  const {immutable = false, enabled = true, ...restConfig} = config;
  const swr = immutable ? useSWRImmutable : useSWR;
  const url = Array.isArray(urlKey) ? urlKey[0] : urlKey;

  const {data, error, ...restResult} = swr<TData>(
    enabled ? urlKey : null,
    () =>
      request(url as string),
    restConfig,
  );

  return {
    data,
    error,
    isLoading: !data && !error, // Derived loading status, since swr doesn't provide it.
    ...restResult,
  };
}

export function useMultipleQuery(urls: string[], config?: SWRConfiguration) {
  return useSWR(urls, multipleRequest, config);
}

// https://swr.vercel.app/docs/advanced/cache#mutate-multiple-keys-from-regex
export function useMatchMutate() {
  const {cache, mutate} = useSWRConfig();

  return (matcher: any, ...args: any) => {
    if (!(cache instanceof Map)) {
      throw new Error(
        'matchMutate requires the cache provider to be a Map instance',
      );
    }

    const keys = [];

    for (const key of cache.keys()) {
      if (matcher.test(key)) {
        keys.push(key);
      }
    }

    const mutations = keys.map((key) => mutate(key, ...args));
    return Promise.all(mutations);
  };
}

// https://swr.vercel.app/docs/middleware#keep-previous-result
export const laggy: Middleware =
  (useSWRNext: SWRHook) => (key, fetcher, config) => {
    // Use a ref to store previous returned data.
    const laggyDataRef = useRef<unknown>();

    // Actual SWR hook.
    const swr = useSWRNext(key, fetcher, config);

    useEffect(() => {
      // Update ref if data is not undefined.
      if (swr.data !== undefined) {
        laggyDataRef.current = swr.data;
      }
    }, [swr.data]);

    // Expose a method to clear the laggy data, if any.
    const resetLaggy = useCallback(() => {
      laggyDataRef.current = undefined;
    }, []);

    // Fallback to previous data if the current data is undefined.
    const dataOrLaggyData =
      swr.data === undefined ? laggyDataRef.current : swr.data;

    // Is it showing previous data?
    const isLagging =
      swr.data === undefined && laggyDataRef.current !== undefined;

    // Also add a `isLagging` field to SWR.
    return Object.assign({}, swr, {
      data: dataOrLaggyData,
      isLagging,
      resetLaggy,
    });
  };
