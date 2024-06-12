import type { UserAuthCode } from '@/utils/authCode';
export interface UserInfoProps {
  staffId: number;
  staffName: string;
  roleCode: UserAuthCode;
}
