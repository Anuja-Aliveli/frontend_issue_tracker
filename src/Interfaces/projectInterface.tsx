export interface ProjectSliceInterface {
  projectDetails: ProjectDetails;
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
