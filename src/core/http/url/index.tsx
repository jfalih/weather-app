import qs from 'query-string';
import {RecordQuery} from './url.types';

const baseUrl = (
  host: string | undefined,
  path: string,
  query?: RecordQuery,
): string => qs.stringifyUrl({url: new URL(path, host).toString(), query});

export const openWeatherMap = (path: string, query?: RecordQuery): string =>
  baseUrl('https://api.openweathermap.org/data/2.5', path, query);