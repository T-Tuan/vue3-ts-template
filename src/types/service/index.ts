export type FetchFunc<R, P> = (data: R) => P;

export interface CommonResponsePrefix<T = any> {
  success: boolean;
  code: 0 | 200;
  message: string;
  msg: string;
  data: T;
  [k: string]: any;
}

export type UnPromisify<T> = T extends Promise<infer U> ? U : never;
type UnCommonResponsePrefix<T> = T extends CommonResponsePrefix<infer U> ? U : never;

export type ReturnApiType<T extends (...args: any) => any> = UnPromisify<ReturnType<T>>;

export type ReturnApiDataType<T extends (...args: any) => any> = UnCommonResponsePrefix<
  UnPromisify<ReturnType<T>>
>;

export interface PageBaseResponseProps<T> {
  pageIndex: number;
  pageSize: number;
  count: number;
  dataList: T;
}
