import { CardData, TableColumnData, TableRowData } from './sharedInterface';

export interface ProjectSliceInterface {
  projectDetails: ProjectDetails;
  cardsData: CardData[];
  projectsList: ProjectsList;
  isLoading: boolean;
  error: null | string;
}

export interface ProjectDetails {
  owner: string;
  project_name: string;
  project_description: string;
  project_status: string;
  project_type: string;
  start_date: Date | null;
  end_date: Date | null;
}

export interface CreateProjectErrors {
  owner: boolean;
  project_name: boolean;
  project_description: boolean;
  project_status: boolean;
  project_type: boolean;
  start_date?: boolean;
  end_date?: boolean;
}

export const initialProjectDetails: ProjectDetails = {
  owner: '',
  project_name: '',
  project_description: '',
  project_status: '',
  project_type: '',
  start_date: null,
  end_date: null,
};

export interface CardsData {
  planning: number;
  in_progress: number;
  completed: number;
  closed: number;
  personal: number;
  organization: number;
}

export interface ProjectsList {
  column_data: TableColumnData[];
  project_list: TableRowData[];
  total_count: number;
}
