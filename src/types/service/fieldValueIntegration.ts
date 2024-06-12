/**
 * 文本类型
 */
export type FieldValueVarcharType = string;

/**
 * 时间日期类型
 */
export type FieldValueDateType = string | string[];

/**
 * 链接类型
 */
export interface FieldValueUrlType {
  name: string;
  url: string;
}

/**
 * 数字类型
 */
export type FieldValueNumType = string | number;

/**
 * 判断类型
 */
export type FieldValueBoolType = boolean | undefined;

/**
 * 判断类型
 */
export interface FieldValueImgType {
  name: string;
  width?: number;
  height?: number;
  url: string;
}

/**
 * 联系人卡片
 */
export interface FieldValueStaffType {
  avatar: string;
  staffID: number;
  staffName: string;
}

export interface FieldValueIntegratType {
  [FieldTypeKey.VARCHAR]: FieldValueVarcharType;
  [FieldTypeKey.DATE]: FieldValueDateType;
  [FieldTypeKey.URL]: FieldValueUrlType;
  [FieldTypeKey.NUM]: FieldValueNumType;
  [FieldTypeKey.BOOL]: FieldValueBoolType;
  [FieldTypeKey.IMG]: FieldValueImgType[];
  [FieldTypeKey.STAFF]: FieldValueStaffType;
}
