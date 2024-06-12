import { DataOriginStatus, DataOriginSync } from '@/utils/constant';

export interface checkDataSourceNameProps {
  outerSourceName: string;
}

export interface getFieldMsgProps {
  interfaceAddr: string[];
}

export interface FieldMsgProps {
  interfaceFieldId: string;
  interfaceFieldName: string;
  interfaceDataName: string;
  interfaceDataType: string;

  level?: number;
  fieldKey: string;
  busName: string;
  busType: string;
  dataType?: string;
  parentFieldKey?: string;
  children?: FieldMsgProps[];
}

export interface GetFieldMsgResponse {
  [K: string]: FieldMsgProps[];
}

export interface GetDataSourceListProps {
  pageNumber: number; //当前页码
  pageSize: number; //每页显示条数
  query: {
    searchKey?: string; //搜索关键字  非必填
    outerSourceType?: string[]; //数据源类型   非必填
    status?: DataOriginStatus; //状态   		非必填  0:查全部  1：启用 2：禁用
  };
}

export interface GetDataSourceListResponse {
  id: number;
  outerSourceId: string;
  outerSourceName: string;
  outerSourceType: string;
  interfaceAddr: string;
  interfaceUser: string;
  dataType: 'OBJECT' | 'LIST';
  remark: string;
  sync: DataOriginSync;
  status: DataOriginStatus;
}

export interface getDataSourceBaseProps {
  outerSourceId: string;
}

export interface InterfaceUser {
  staffId: number | string;
  staffName: string;
}

export interface AddDataSourceProps {
  outerSourceId?: string; //数据源id
  outerSourceName: string;
  interfaceAddr: string;
  interfaceUser: InterfaceUser | null;
  dataType: string;
  outerSourceType: string;
  remark: string;
  sync: DataOriginSync;
  status: DataOriginStatus;
  groupParams: {
    paramName: string;
    paramValue: string;
    tips: FunctionStringCallback;
  }[];
}

export type AddDataSourceType =
  | AddDataSourceProps
  | Required<Pick<AddDataSourceProps, 'outerSourceId' | 'interfaceUser' | 'remark'>>
  | Required<Pick<AddDataSourceProps, 'outerSourceId' | 'status' | 'sync'>>;
