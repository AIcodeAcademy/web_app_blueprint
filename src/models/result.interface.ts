export interface Result<T> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: string;
}
