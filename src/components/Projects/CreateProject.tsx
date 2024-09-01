import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  CREATE_PROJECT,
  CREATE_PROJECT_TEXT,
  DARK_BG_COLOR,
  DARK_THEME,
  EDIT,
  EDIT_PROJECT_TEXT,
  FIELD_REQUIRED,
  LIGHT_BG_COLOR,
  LIGHT_THEME,
  PROJECTS,
  SIDEBAR_SELECTED_DARK_BORDER,
  SIDEBAR_SELECTED_LIGHT_BORDER,
} from '../../utils/constants';
import { useTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import {
  CreateProjectErrors,
  initialProjectDetails,
  ProjectDetails,
} from '../../Interfaces/projectInterface';
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import {
  createProjectAPI,
  editProjectAPI,
} from '../../reduxStore/ProjectSlice/projectEffects';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectProjectDetails,
} from '../../reduxStore/ProjectSlice/projectSelectors';
import { toast } from '../../utils/ToastMessage';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateProject = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const projectDetails = useSelector(selectProjectDetails);

  // Define project data form object
  const [projectData, setProjectData] = useState<ProjectDetails>(
    initialProjectDetails,
  );

  const [createProjectErrors, setCreateProjectErrors] =
    useState<CreateProjectErrors>({
      owner: false,
      project_name: false,
      project_description: false,
      project_status: false,
      project_type: false,
    });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();
  const [isEditProject, setIsEditProject] = useState<boolean>(false);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === CREATE_PROJECT) {
      setIsEditProject(false);
    } else if (currentPath.includes(EDIT)) {
      setIsEditProject(true);
    }
    if (projectDetails) {
      setProjectData(projectDetails);
    }
    if (error) {
      toast.error(error);
    }
  }, [error, projectDetails]);

  const handleFieldChange = (
    fieldName: string,
    fieldValue: string | Dayjs | null,
  ) => {
    setProjectData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
    setCreateProjectErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: false,
    }));
  };

  const handleProjectCreation = (event: any) => {
    event.preventDefault();
    setIsSubmitted(true);

    const newErrors = {
      owner: (projectData.owner || '').trim() === '',
      project_name: (projectData.project_name || '').trim() === '',
      project_description:
        (projectData.project_description || '').trim() === '',
      project_status: (projectData.project_status || '').trim() === '',
      project_type: (projectData.project_type || '').trim() === '',
    };

    setCreateProjectErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      setIsSubmitted(false);
      if (isEditProject) {
        editProjectAPI(projectData, dispatch, navigate);
      } else {
        createProjectAPI(projectData, dispatch, navigate);
      }
    }
  };

  const handleCancel = () => {
    setProjectData(initialProjectDetails);
    navigate(PROJECTS);
  };

  return (
    <>
      <Container
        component="main"
        sx={{
          height: '100% !important',
          width: '100% !important',
          overflow: 'auto',
          padding: '1rem',
          backgroundColor:
            theme.palette.mode === DARK_THEME ? DARK_BG_COLOR : LIGHT_BG_COLOR,
        }}>
        <Box component="form" onSubmit={handleProjectCreation}>
          <Typography component="h1" variant="h1">
            {isEditProject ? EDIT_PROJECT_TEXT : CREATE_PROJECT_TEXT}
          </Typography>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              justifyContent: { xs: 'center', sm: 'center' },
              mt: 3,
            }}>
            <Grid
              container
              spacing={2}
              sx={{
                width: '100%',
                ...(isMdUp && {
                  borderBottom:
                    theme.palette.mode === LIGHT_THEME
                      ? SIDEBAR_SELECTED_LIGHT_BORDER
                      : SIDEBAR_SELECTED_DARK_BORDER,
                  paddingBottom: '0.25rem',
                }),
              }}>
              <Grid item xs={12} md={2}>
                <Typography component="h1" variant="h4">
                  Owner
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
                sx={{ paddingTop: { xs: '10px !important' } }}>
                <TextField
                  id="standard-basic"
                  variant={isMdUp ? 'standard' : 'outlined'}
                  value={projectData.owner}
                  error={isSubmitted && createProjectErrors.owner}
                  helperText={
                    isSubmitted && createProjectErrors.owner && FIELD_REQUIRED
                  }
                  onChange={(e) => handleFieldChange('owner', e.target.value)}
                  sx={{ width: '100%' }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ shrink: false }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              justifyContent: { xs: 'center', sm: 'center' },
              mt: { xs: 2, md: 3 },
            }}>
            <Grid
              container
              spacing={2}
              sx={{
                width: '100%',
                ...(isMdUp && {
                  borderBottom:
                    theme.palette.mode === LIGHT_THEME
                      ? SIDEBAR_SELECTED_LIGHT_BORDER
                      : SIDEBAR_SELECTED_DARK_BORDER,
                  paddingBottom: '0.25rem',
                }),
              }}>
              <Grid item xs={12} md={2}>
                <Typography component="h1" variant="h4">
                  Project Name
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
                sx={{ paddingTop: { xs: '10px !important' } }}>
                <TextField
                  id="standard-basic"
                  variant={isMdUp ? 'standard' : 'outlined'}
                  value={projectData.project_name}
                  error={isSubmitted && createProjectErrors.project_name}
                  helperText={
                    isSubmitted &&
                    createProjectErrors.project_name &&
                    FIELD_REQUIRED
                  }
                  onChange={(e) =>
                    handleFieldChange('project_name', e.target.value)
                  }
                  sx={{ width: '100%' }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ shrink: false }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              justifyContent: { xs: 'center', sm: 'center' },
              mt: { xs: 2, md: 3 },
            }}>
            <Grid
              container
              spacing={2}
              sx={{
                width: '100%',
                ...(isMdUp && {
                  borderBottom:
                    theme.palette.mode === LIGHT_THEME
                      ? SIDEBAR_SELECTED_LIGHT_BORDER
                      : SIDEBAR_SELECTED_DARK_BORDER,
                  paddingBottom: '0.25rem',
                }),
              }}>
              <Grid item xs={12} md={2}>
                <Typography component="h1" variant="h4">
                  Project Description
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
                sx={{ paddingTop: { xs: '10px !important' } }}>
                <TextField
                  id="standard-basic"
                  variant={isMdUp ? 'standard' : 'outlined'}
                  value={projectData.project_description}
                  error={isSubmitted && createProjectErrors.project_description}
                  helperText={
                    isSubmitted &&
                    createProjectErrors.project_description &&
                    FIELD_REQUIRED
                  }
                  onChange={(e) =>
                    handleFieldChange('project_description', e.target.value)
                  }
                  sx={{ width: '100%' }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ shrink: false }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex' },
              justifyContent: { xs: 'center' },
              mt: { xs: 2, md: 3 },
            }}>
            <Grid
              container
              spacing={2}
              sx={{
                width: '100%',
                ...(isMdUp && {
                  borderBottom:
                    theme.palette.mode === LIGHT_THEME
                      ? SIDEBAR_SELECTED_LIGHT_BORDER
                      : SIDEBAR_SELECTED_DARK_BORDER,
                  paddingBottom: '0.25rem',
                }),
              }}>
              <Grid item xs={12} md={2} sx={{ alignSelf: 'center' }}>
                <Typography component="h1" variant="h4">
                  Start Date
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  paddingTop: { xs: '10px !important' },
                  alignSelf: 'center',
                }}>
                <DatePicker
                  value={
                    projectData.start_date
                      ? dayjs(projectData.start_date)
                      : null
                  }
                  onChange={(date) => handleFieldChange('start_date', date)}
                  sx={{
                    width: '100%',
                    '.MuiOutlinedInput-root': {
                      borderRadius: '0px',
                      border: 'none',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                    },
                    '.MuiOutlinedInput-root.Mui-focused': {
                      outline: 'none',
                      border: 'none',
                    },
                    '.MuiInputBase-input': {
                      borderBottom: 'none',
                      padding: '0px',
                    },
                  }}
                  slotProps={{
                    textField: {
                      variant: isMdUp ? 'standard' : 'outlined',
                      error: isSubmitted && createProjectErrors.start_date,
                      helperText:
                        isSubmitted &&
                        createProjectErrors.start_date &&
                        FIELD_REQUIRED,
                      InputProps: {
                        disableUnderline: true,
                      },
                    },
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  paddingTop: { xs: '10px !important' },
                  alignSelf: 'center',
                }}>
                <Typography component="h1" variant="h4">
                  End Date
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  paddingTop: { xs: '10px !important' },
                  alignSelf: 'center',
                }}>
                <DatePicker
                  value={
                    projectData.end_date ? dayjs(projectData.end_date) : null
                  }
                  onChange={(date) => handleFieldChange('end_date', date)}
                  sx={{
                    width: '100%',
                    '.MuiOutlinedInput-root': {
                      borderRadius: '0px',
                      border: 'none',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                    },
                    '.MuiOutlinedInput-root.Mui-focused': {
                      outline: 'none',
                      border: 'none',
                    },
                    '.MuiInputBase-input': {
                      borderBottom: 'none',
                      padding: '0px',
                    },
                  }}
                  slotProps={{
                    textField: {
                      variant: isMdUp ? 'standard' : 'outlined',
                      error: isSubmitted && createProjectErrors.end_date,
                      helperText:
                        isSubmitted &&
                        createProjectErrors.end_date &&
                        FIELD_REQUIRED,
                      InputProps: {
                        disableUnderline: true,
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              justifyContent: { xs: 'center', sm: 'center' },
              mt: { xs: 2, md: 3 },
            }}>
            <Grid
              container
              spacing={2}
              sx={{
                width: '100%',
                ...(isMdUp && {
                  borderBottom:
                    theme.palette.mode === LIGHT_THEME
                      ? SIDEBAR_SELECTED_LIGHT_BORDER
                      : SIDEBAR_SELECTED_DARK_BORDER,
                  paddingBottom: '0.25rem',
                }),
              }}>
              <Grid item xs={12} md={2}>
                <Typography component="h1" variant="h4">
                  Project Status
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
                sx={{ paddingTop: { xs: '10px !important' } }}>
                <FormControl
                  fullWidth
                  variant={isMdUp ? 'standard' : 'outlined'}>
                  <Select
                    value={projectData.project_status}
                    onChange={(e) =>
                      handleFieldChange('project_status', e.target.value)
                    }
                    displayEmpty
                    error={isSubmitted && createProjectErrors.project_status}>
                    <MenuItem value="" disabled>
                      <em>Select Status</em>
                    </MenuItem>
                    <MenuItem value="planning">Planning</MenuItem>
                    <MenuItem value="in-progress">In-Progress</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="closed">Closed</MenuItem>
                  </Select>
                  {isSubmitted && createProjectErrors.project_status && (
                    <FormHelperText error>{FIELD_REQUIRED}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              justifyContent: { xs: 'center', sm: 'center' },
              mt: { xs: 2, md: 3 },
            }}>
            <Grid
              container
              spacing={2}
              sx={{
                width: '100%',
                ...(isMdUp && {
                  borderBottom:
                    theme.palette.mode === LIGHT_THEME
                      ? SIDEBAR_SELECTED_LIGHT_BORDER
                      : SIDEBAR_SELECTED_DARK_BORDER,
                  paddingBottom: '0.25rem',
                }),
              }}>
              <Grid item xs={12} md={2}>
                <Typography component="h1" variant="h4">
                  Project Type
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={10}
                sx={{ paddingTop: { xs: '10px !important' } }}>
                <FormControl
                  fullWidth
                  variant={isMdUp ? 'standard' : 'outlined'}>
                  <Select
                    value={projectData.project_type}
                    onChange={(e) =>
                      handleFieldChange('project_type', e.target.value)
                    }
                    displayEmpty
                    error={isSubmitted && createProjectErrors.project_type}>
                    <MenuItem value="" disabled>
                      <em>Select Type</em>
                    </MenuItem>
                    <MenuItem value="organization">Organization</MenuItem>
                    <MenuItem value="personal">Personal</MenuItem>
                  </Select>
                  {isSubmitted && createProjectErrors.project_type && (
                    <FormHelperText error>{FIELD_REQUIRED}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              justifyContent: { xs: 'center', sm: 'center' },
              mt: { xs: 2, md: 3 },
            }}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={1}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading}>
                  {isLoading ? (
                    <CircularProgress
                      size={24}
                      color="inherit"
                      sx={{ color: 'white' }}
                    />
                  ) : isEditProject ? (
                    'Update'
                  ) : (
                    'Create'
                  )}
                </Button>
              </Grid>
              <Grid item xs={3} md={1}>
                <Button fullWidth variant="outlined" onClick={handleCancel}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CreateProject;
