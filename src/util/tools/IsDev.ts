const development: boolean =
  !process.env.NODE_ENV ||
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'test';

export function isDev(): boolean {
  return development;
}
