export type ColumnType = 'text' | 'number' | 'date' | 'boolean' | 'badge';


export interface TableColumn {
  key: string;
  label: string;
  type?: ColumnType;
  isSortable?: boolean;
}


export interface TableAction {
  type: 'view' | 'edit' | 'delete';
  label: string;
  icon: string;
  permission?: string; // READ | WRITE | DELETE
}