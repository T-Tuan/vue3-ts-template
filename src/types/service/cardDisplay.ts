import type { CardDisplayStatus, FieldTypeKey } from '@/utils/constant';

export interface CardMappingProps {
  cardId: string;
  cardName: string;
  versionId: string;
  label: string;
  key: string;
  type?: FieldTypeKey;
  [K: string]: any;
}

export interface CardDisplayMsgProps {
  id?: number;
  modelSourceId?: string | number;
  modelSourceName: string;
  cards: string[];
  status: CardDisplayStatus;
  bind: {
    fieldName: string;
    fieldKey: string;
    fieldType: FieldTypeKey;
    mapping: CardMappingProps[];
    [K: string]: any;
  }[];
}

export interface CardListProps {
  pageNumber: number;
  pageSize: number;
  query: {
    modelSourceId?: string;
    cards?: string[];
    status?: CardDisplayStatus;
  };
}

export interface CardListResponse {
  id: number;
  modelSourceId: string;
  modelSourceName: string;
  cards: string[];
  createUser: string;
  createTime: string;
  updateUser: string;
  updateTime: string;
  status: CardDisplayStatus;
}

export interface PortalCardParam {
  key: string; //卡位key
  type: FieldTypeKey; //卡位类型
  label: string; //卡位标签
}

export interface PortalCardType {
  corpkey: string;
  cardId: string;
  cardName: string;
  cardDesc: string;
  versionId: string;
  cardTypeId: string;
  cardTypeName: string;
  cardThumbnail: string;
  cardParam: PortalCardParam[];
}

export interface CardParam {
  key: string;
  label: string;
  type: string;
}

export interface LldData {
  cardId: string;
  cardName: string;
  cardParam: CardParam;
  cardThumbnail: string;
  key: SVGStringList;
  label: string;
}
export interface CardItem {
  cardId: string;
  cardName: string;
  cardParam: CardParam;
  cardThumbnail: string;
  isEdit: boolean;
  key: string;
  label: string;
  oldData: LldData;
  type: string;
  versionId: string;
}

export interface cardParamItem {
  children: cardParamItem[];
  key: string;
  label: string;
  type: string;
  modelList?: ModelList[];
  contentKey?: string;
  cardId: string;
  noDefaultModel: boolean;
}

export interface ModelList {
  fieldKey: string;
  fieldName: string;
  fieldType: string;
  required: boolean;
  fieldList: ModelList[];
  properties: {
    inputType: string;
    lowLimit: number;
    regularRule: {
      key: number;
    };
    tips: string;
    upLimit: number;
  };
}

export interface PortalItem {
  cardId: string;
  cardName: string;
  cardParam: cardParamItem[];
  cardThumbnail: string;
  corpkey: string;
  label: string;
}

export interface MappingItem {
  key: string;
  fieldKey: string;
}

export interface BindItem {
  cardId: string;
  mapping: MappingItem[];
}

export interface subData {
  modelSourceId?: string | number;
  modelSourceName: string;
  cards: string[];
  status: CardDisplayStatus;
  bind: BindItem[];
}

export interface ViewSelectCards {
  label: string;
}
