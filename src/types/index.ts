import type { SetupContext, VNode } from 'vue';
import type { TdPaginationProps } from 'tdesign-vue-next';

export interface FC<E = string[]> {
  (props: Record<string, any>, ctx: SetupContext<E>): VNode;
}

export type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

export type FieldType =
  | 'VARCHAR'
  | 'TEXT'
  | 'DATE'
  | 'URL'
  | 'NUM'
  | 'STAFF'
  | 'BOOL'
  | 'FILE'
  | 'IMG'
  | 'OBJ'
  | 'LIST';

export type TemplateFieldType = Exclude<FieldType, 'VARCHAR'>;

export type PaginationType = Pick<TdPaginationProps, 'current' | 'pageSize' | 'total'>;
