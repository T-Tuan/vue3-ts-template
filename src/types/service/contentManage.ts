import type { TagProps } from './tagManage';
import type { SystemFuncFieldEnum } from '@/utils/constant';
/**
 * 门户应用类型
 *
 * @param id cmsid
 */
export interface PortalAppType {
  id: string;
  appId: string;
  channelCode: string;
  appName: string;
}

export interface RelateSourceType {
  id: string;
  name: string;
}

/**
 * 应用内容源列表类型
 */
export interface CmsSourceInfoType {
  dataType: 'LIST' | 'OBJECT';
  deleteFlag: false;
  createUser: string;
  createTime: string;
  id: string;
  cmsId: string;
  appId: string;
  sourceName: string;
  relateSource: RelateSourceType;
  importRules: string;
  groupId: number;
  status: number;
  typeOfGetData: 1 | 2;
  latestExecutionTime?: string;
}

/**
 * 应用内容源信息
 */
export interface AddAppSourceProps {
  appId: string;
  cmsId: string;
  groupId: number;
  id: string;
  importRules: string;
  relateSource: RelateSourceType;
  sourceName: string;
}

/**
 * 分类属性
 */
export interface CategoryProps {
  children?: CategoryProps[];
  icon: string;
  id: string;
  name: string;
  parentId: string;
  sourceId: string;
  url: string;
  contentCount: number;
}

export interface FindContentByPageRequestProps {
  pageNumber: number;
  pageSize: number;
  asc?: boolean;
  sortField?: string;
  sourceId?: string;

  query: {
    cmsId?: PortalAppType['id'];
    sourceId?: CmsSourceInfoType['id'];
    categoryId?: CategoryProps['id'];
    key?: string; // 模糊查询的 name值和id 合并变量
    show?: boolean; // 状态
    tags?: string[]; // 标签id数组
    dataSourceIds?: string[]; // 数据源id
  };
}

export interface FieldModelType {
  fieldKey: string;
  fieldName: string;
  fieldType: string;
  required: boolean;
  isShow: boolean;
  editEnable: boolean;
  bindField: any[];
  properties: Record<string, any>;
  fieldList: any[];
}

export interface ContentPermissionType {
  authType: 1 | 2;
  whiteList: Partial<{
    fileId: string;
    fileName: string;
  }>;
}

export interface ManualHandContentType extends ContentPermissionType {
  id?: string;
  categoryId: string;
  data: Record<string, any>;
  dataSource: Record<string, any>;
  settings: Record<
    SystemFuncFieldEnum,
    {
      isEnabled: boolean;
      initialValue?: number;
    }
  >;
  show: number;
  sourceId: string;
  tags: TagProps['tagId'][];
  top: number;
  visibleRange: object;

  url?: string;
}

export interface FindContentProps {
  categoryId: string;
  createTime: string;
  createUser: string;
  id: string;
  sourceId: string;
  updateTime: string;
  updateUser: string;
  show: boolean;
  sort: number;
  settings: {};
  data: Record<string, any>;
  deleteFlag: boolean;
  tags: string[];
  top: boolean;
  visibleRange: {};
}

export interface ConditionItems {
  left: string; // 字段标识
  comparisonOperator: string; // 比较操作符
  rightValue: unknown; // 比较值
}

export interface ConditionGroupProps {
  logicalOperator: 'OR' | 'AND'; // 逻辑操作符
  conditionItems: ConditionItems[];
}
export interface AdditionRuleProps extends ContentPermissionType {
  cmsId: string; // 应用id
  sourceId: string; // 数据源id
  categoryId: string; // 类别id
  outerSourceIds: string[]; // 外部数据源id
  condition: null; // 条件对象，暂时不用
  conditionGroup: ConditionGroupProps;
  remark: string; // 备注
  visibleRange: {};
  tags: string[];
}

export interface ImportFileProps extends ContentPermissionType {
  cmsId: string;
  sourceId: string;
  categoryId: string;
  asc: boolean;
  importType?: 'reset' | 'add';
  tags: string[];
  visibleRange: Record<string, any>;
  file: any;
}
