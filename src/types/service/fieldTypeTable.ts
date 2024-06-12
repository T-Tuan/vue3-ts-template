export interface FieldTypeTableRequestProps {
  pageNumber: number; //当前页码
  pageSize: number; //每页显示条数
}

export interface DataOriginTypeTableProps {
  id: number;
  name: string;
  type: string;
  updateUser: string;
  updateTime: string;
}
export interface FieldTypeTableProps {
  id: number;
  busName: string;
  busType: string;
  updateUser: string;
  updateTime: string;
}
