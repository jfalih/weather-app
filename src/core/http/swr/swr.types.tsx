export type RecordOptionsSwr = Record<string, any>;
export type UrlSwr = string | string[];
export enum MutationStatus {
  Idle = 'idle',
  Loading = 'loading',
  Error = 'error',
  Success = 'success',
}
