import { SystemFuncFieldEnum } from '@/utils/constant';

export interface OperateBase {
  cmsId: string;
  contentId: string;
}

// export interface CommentContent {
//   commentId: number;
//   operatorId: number;
//   operatorName: string;
//   comment: string;
//   commentTime: string;
//   commentReplyList: CommentContent[];
// }

export interface FuncFieldContent {
  isEnabled: boolean;
  initialValue: number;
  totalValue?: number;
  isOperated?: boolean;
}

export type OperationDataProps = Record<SystemFuncFieldEnum, FuncFieldContent>;

export interface CommentPostProps extends OperateBase {
  commentIdToReply?: number;
  comment: string;
}
