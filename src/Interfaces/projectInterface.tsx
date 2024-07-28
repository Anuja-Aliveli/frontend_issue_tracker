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
