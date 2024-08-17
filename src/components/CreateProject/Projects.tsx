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
  getProjectCards,
  getProjectsList,
} from '../../reduxStore/ProjectSlice/projectEffects';
import { toast } from '../../utils/ToastMessage';
import TableComponent from '../Common/flatTable';
import { TableRowData } from '../../Interfaces/sharedInterface';

const Projects = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cardsData = useSelector(selectProjectCardsData);
  const projectsList = useSelector(selectProjectsList);

  const renderProjects = () => {
    return (
      <>
        <CountCard cardsData={cardsData} />
        <TableComponent
          columnData={projectsList.column_data}
          rowData={projectsList.project_list}
          isAllRowSelected={false}
          isSelection={false}
          isActionBtn={false}
          actionOptions={[]}
          onRowSelect={handleRowSelect}
          onActionClick={handleActionClick}
          onAllRows={handleAllRows}
          showSort={false}
          handleSort={handleSort}
          showPagination={false}
          handlePagination={handlePagination}
          showSearch={true}
          handleSearch={handleSearch}
          handleRefresh={handleRefresh}
        />
      </>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      await getProjectCards(dispatch);
      await getProjectsList(dispatch);
    };

    fetchData();
    if (projectsList) {
      console.log('dddd fff', projectsList);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error(error);
  }

  // Handler for row selection
  const handleRowSelect = (rowData: any) => {
    console.log('ddd selected row', rowData);
  };

  // Handler for action click
  const handleActionClick = (row: any, action: string) => {
    console.log(`Action ${action} clicked for row ID:`, row);
  };

  // Action Options
  const actionOptions = [
    {
      actId: 1,
      label: 'Edit',
      value: 'edit',
    },
    {
      actId: 1,
      label: 'Delete',
      value: 'delete',
    },
    {
      actId: 1,
      label: 'View',
      value: 'view',
    },
  ];

  // On All Rows Selected
  const handleAllRows = (rowsData: any) => {
    console.log(`all rows ${rowsData}`);
  };

  const handleSort = (sortField: string, sortDirection: string) => {
    console.log('sorted', sortField, sortDirection);
  };

  const handlePagination = (page: number, limit: number) => {
    console.log('pagination', page, limit);
  };

  const handleSearch = (searchInput: string) => {
    console.log('search Input', searchInput);
  };

  const handleRefresh = () => {
    console.log('refresh');
  };

  return renderProjects();
};
export default Projects;
