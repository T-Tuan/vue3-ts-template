import { FieldTypeKey, CmsContentStatus } from '@/utils/constant';
import type { PageBaseResponseProps } from './index';
import type { GetDataSourceListResponse } from './dataOrigin';
import type { PortalCardType } from './cardDisplay';
export interface GetChannelListResponse {
  id: number;
  name: string;
  code: string;
}

export interface PropertiesProps {
  [FieldTypeKey.VARCHAR]: {
    tips: string; //字段提示
    lowLimit: number; //最少字符数
    upLimit: number; //最多字符数
    regularRule: string; //校验正则
  };
  [FieldTypeKey.BOOL]: boolean;
}

export type PropertiesType =
  | Partial<PropertiesProps[FieldTypeKey.VARCHAR]>
  | Partial<PropertiesProps[FieldTypeKey.BOOL]>;

export interface BindFieldProps {
  bindSourceId: string; //绑定数据源ID
  bindSourceName: string; //绑定数据源名
  bindSourceFieldKey: string; //绑定数据源字段Key
  bindSourceFieldName: string; //绑定数据源字段名称
  [K: string]: any;
}

export interface FieldInfoProps {
  fieldKey: string; //UUID，前端生成
  titleField?: boolean; // 标题字段
  remark?: string; //字段描述
  systemField?: boolean; // 是否系统字段
  applicationSystemField?: boolean; // 是否应用系统字段
  fieldName: string; //字段名称，用户填入
  fieldType: FieldTypeKey; //字段类型
  required: boolean; //是否必填
  isShow: boolean; //是否展示给用户
  editEnable: boolean; //建模时是否可编辑
  bindField: BindFieldProps[];
  // properties: PropertiesType |  {} |;
  properties: Record<string, any>;
  fieldList: FieldInfoProps[]; //子字段列表，仅在 fieldType 为列表时使用];
}

export interface CmsContentProps {
  id?: string;
  name: string;
  relateDataSource: {
    id: Pick<GetDataSourceListResponse, 'outerSourceId'>['outerSourceId'];
    name: Pick<GetDataSourceListResponse, 'outerSourceId'>['outerSourceId'];
  }[];
  channel: {
    id: Pick<GetChannelListResponse, 'code'>['code'];
    name: Pick<GetChannelListResponse, 'name'>['name'];
  }[];
  type: string;
  dataType: 'OBJECT' | 'LIST';

  status: CmsContentStatus;
  model: FieldInfoProps[];
  [K: string]: any;
}

// export interface ContentModel {
//   bindField: BindFieldProps[];
//   editEnable: boolean;
//   fieldKey: string;
//   fieldList?: ContentModel[];
//   fieldName: string;
//   fieldType: string;
//   isShow: boolean;
//   properties: object;
//   required: boolean;
//   systemField: boolean;
// }

// export interface FieldListItem {
//   isExpand: boolean;
//   fieldName: string;
//   fieldKey: string;
//   fieldType: string;
//   mapping: PortalCardType;
//   properties: object;
//   fieldList: object[];
//   children: FieldListItem[];
// }
