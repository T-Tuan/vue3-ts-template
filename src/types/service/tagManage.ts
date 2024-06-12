import type { TagTypeEnum } from '@/utils/constant';

export interface TagProps {
  tagId: string;
  tagName: string;
  tagType: TagTypeEnum;
  createUser: string;
  createTime: string;
}

export type TagListResponse = Record<TagTypeEnum, TagProps[]>;

export interface TagBaseRequestProps {
  tagName: string;
  tagType: TagTypeEnum;
}
