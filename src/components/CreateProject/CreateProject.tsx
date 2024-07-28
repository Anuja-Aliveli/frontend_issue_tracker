import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  LIGHT_THEME,
  SIDEBAR_SELECTED_DARK_BORDER,
  SIDEBAR_SELECTED_LIGHT_BORDER,
} from '../../utils/constants';
import { useTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CreateProject = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Container
        component="main"
        sx={{
          height: '100% !important',
          width: '100% !important',
          overflow: 'auto',
        }}>
        <Box component="form">
          <Typography component="h1" variant="h1">
            Create Project
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
              mt: { xs: 2, md: 5 },
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
              mt: { xs: 2, md: 5 },
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
              mt: { xs: 2, md: 5 },
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
                      boxShadow: 'none',
                    },
                    '.MuiOutlinedInput-root fieldset': {
                      boxShadow: 'none',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2} sx={{ alignSelf: 'center' }}>
                <Typography component="h1" variant="h4">
                  End Date
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ alignSelf: 'center' }}>
                <DatePicker
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
                      boxShadow: 'none',
                    },
                    '.MuiOutlinedInput-root fieldset': {
                      boxShadow: 'none',
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
              mt: { xs: 2, md: 5 },
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
              <Grid item xs={12} md={10}>
                <FormControl
                  fullWidth
                  variant={isMdUp ? 'standard' : 'outlined'}>
                  <Select
                    id="projectType"
                    sx={{ width: '100%', borderBottom: 'none' }}
                    inputProps={{
                      disableUnderline: true,
                    }}>
                    <MenuItem value="planning">Planning</MenuItem>
                    <MenuItem value="in_progress">In-Progress</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="Closed">Closed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              justifyContent: { xs: 'center', sm: 'center' },
              mt: { xs: 2, md: 5 },
            }}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={1}>
                <Button type="submit" fullWidth variant="contained">
                  Create
                </Button>
              </Grid>
              <Grid item xs={3} md={1}>
                <Button type="submit" fullWidth variant="outlined">
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
