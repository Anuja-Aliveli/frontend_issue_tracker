// Count Card Interfaces
export interface CountCardProps {
  cardsData: CardData[];
}

export interface CardData {
  count: number;
  label: string;
  bg: string;
  color: string;
}

// Table Component Interface
export interface TableColumnData {
  fieldname: string;
  label: string;
  fieldtype: string;
}

export interface TableRowData {
  rowId: string;
  [key: string]: any;
}

export interface TableActionOptions {
  actId: number;
  label: string;
  value: string;
}

export interface TableComponentProps {
  columnData: TableColumnData[];
  rowData: TableRowData[];
  isSelection?: boolean;
  onRowSelect?: (rowData: any) => void;
  isAllRowSelected?: boolean;
  onAllRows?: (rowsData: any) => void;
  isActionBtn?: boolean;
  actionOptions?: TableActionOptions[];
  onActionClick?: (row: any, action: ActionOptions) => void;
  showSort?: boolean;
  handleSort?: (sortField: string, sortDirection: string) => void;
  showPagination?: boolean;
  handlePagination?: (page: number, limit: number) => void;
  showSearch?: boolean;
  handleSearch?: (searchInput: string) => void;
  handleRefresh?: () => void;
}

export interface ActionOptions {
  actId: number;
  label: string;
  value: string;
}

export interface ProjectActionData {
  project_details: TableRowData;
  action_details: ActionOptions;
}

export interface ConfirmDialogProps {
  isOpen: boolean;
  handleConfirmDialogClose: () => void;
  handleConfirmDialogConfirm: () => void;
  modalTitle?: string;
  modalContent: string;
}

// Activity Trail Interface
export interface ActivityTrailInterface {
  label: string;
  created_at: string;
  description: string;
}

export interface ActivityTrailInterfaceProps {
  steps: ActivityTrailInterface[];
}
