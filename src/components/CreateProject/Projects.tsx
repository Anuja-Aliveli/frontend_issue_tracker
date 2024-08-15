import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import {
  selectError,
  selectIsLoading,
  selectProjectCardsData,
} from '../../reduxStore/ProjectSlice/projectSelectors';
import CountCard from '../Common/countCard';
import { getProjectCards } from '../../reduxStore/ProjectSlice/projectEffects';
import { toast } from '../../utils/ToastMessage';

const Projects = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cardsData = useSelector(selectProjectCardsData);

  const renderProjects = () => {
    return <CountCard cardsData={cardsData} />;
  };

  useEffect(() => {
    getProjectCards(dispatch);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error(error);
  }
  return renderProjects();
};
export default Projects;
