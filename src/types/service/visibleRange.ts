import { VisibleRangeKey, VisibleRangeType } from '@/components/PermissionControl/constants';

export interface VisibleRangeProps {
  key: VisibleRangeKey;
  label?: string;
  options: [
    {
      id: string;
      name: string;
    },
  ];
  type: VisibleRangeType;
}
export type VisibleRangeList = VisibleRangeProps[];
