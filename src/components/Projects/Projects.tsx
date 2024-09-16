import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import {
  selectError,
  selectIsLoading,
  selectProjectCardsData,
  selectProjectsList,
} from '../../reduxStore/ProjectSlice/projectSelectors';
import CountCard from '../Common/countCard';
import {
  editProjectAPI,
  fetchProjectDetails,
  getProjectCards,
  getProjectsList,
} from '../../reduxStore/ProjectSlice/projectEffects';
import { toast } from '../../utils/ToastMessage';
import TableComponent from '../Common/flatTable';
import {
  ActionOptions,
  ProjectActionData,
  TableRowData,
} from '../../Interfaces/sharedInterface';
import {
  CLOSE,
  CLOSED,
  EDIT,
  PROJECT_CLOSE_CONTENT,
  VIEW,
} from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import ConfirmDialog from '../Common/confirmDialog';

const Projects = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cardsData = useSelector(selectProjectCardsData);
  const projectsList = useSelector(selectProjectsList);
  const [searchInput, setSearchInput] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [sortField, setSortField] = useState<string>('created_at');
  const [sortDirection, setSortDirection] = useState<string>('desc');
  const [projectActionData, setProjectActionData] =
    useState<ProjectActionData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleConfirmDialog = () => {
    setIsDialogOpen(false);
    const requestBody = {
      owner: projectActionData?.project_details.owner,
      project_name: projectActionData?.project_details.project_name,
      project_description:
        projectActionData?.project_details.project_description,
      project_status: projectActionData?.project_details.project_status,
      project_type: projectActionData?.project_details.project_type,
      start_date: projectActionData?.project_details.start_date,
      end_date: projectActionData?.project_details.end_date,
    };
    editProjectAPI(requestBody, dispatch, navigate, false);
    getProjectsList(dispatch);
  };

  const handleActionClick = (row: TableRowData, action: ActionOptions) => {
    setProjectActionData({ project_details: row, action_details: action });

    switch (action.value) {
      case EDIT:
        fetchProjectDetails(dispatch, row.project_id);
        navigate(row.route_link.edit_project);
        break;
      case VIEW:
        fetchProjectDetails(dispatch, row.project_id);
        navigate(row.route_link.project_id);
        break;
      case CLOSE:
        setIsDialogOpen(true);
        break;
      default:
        return null;
    }
  };

  const triggerProjectsList = () => {
    getProjectsList(
      dispatch,
      searchInput,
      page,
      limit,
      sortField,
      sortDirection,
    );
  };

  const handleSort = (sortField: string, sortDirection: string) => {
    setSortField(sortField);
    setSortDirection(sortDirection);
    triggerProjectsList();
  };

  const handlePagination = (page: number, limit: number) => {
    setPage(page);
    setLimit(limit);
    triggerProjectsList();
  };

  const handleSearch = (input: string) => {
    setSearchInput(input);
    triggerProjectsList();
  };

  const handleRefresh = () => {
    setSortField('created_at');
    setSortDirection('desc');
    setSearchInput('');
    setPage(1);
    setLimit(10);
    triggerProjectsList();
  };

  useEffect(() => {
    const fetchData = async () => {
      await getProjectCards(dispatch);
      await getProjectsList(dispatch);
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <CountCard cardsData={cardsData} />
      <TableComponent
        columnData={projectsList.column_data}
        rowData={projectsList.project_list}
        isActionBtn={true}
        actionOptions={projectsList.action_options}
        onActionClick={handleActionClick}
        showSort={true}
        handleSort={handleSort}
        showPagination={true}
        handlePagination={handlePagination}
        showSearch={true}
        handleSearch={handleSearch}
        handleRefresh={handleRefresh}
      />
      <ConfirmDialog
        isOpen={isDialogOpen}
        handleConfirmDialogClose={handleCloseDialog}
        handleConfirmDialogConfirm={handleConfirmDialog}
        modalContent={PROJECT_CLOSE_CONTENT}
      />
    </>
  );
};

export default Projects;
