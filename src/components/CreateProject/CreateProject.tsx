import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  TextField,
  Typography,
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
  const;
  return (
    <>
      <Container
        component="main"
        sx={{
          height: '100% !important',
          width: '100% !important',
        }}>
        <Box component="form">
          <Typography component="h1" variant="h1">
            Create Project
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid
              container
              spacing={2}
              sx={{
                borderBottom:
                  theme.palette.mode === LIGHT_THEME
                    ? SIDEBAR_SELECTED_LIGHT_BORDER
                    : SIDEBAR_SELECTED_DARK_BORDER,
                paddingBottom: '0.25rem',
              }}>
              <Grid item md={2}>
                <Typography component="h1" variant="h4">
                  Owner
                </Typography>
              </Grid>
              <Grid item md={10}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  sx={{ width: '100%' }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ shrink: false }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Grid
              container
              spacing={2}
              sx={{
                borderBottom:
                  theme.palette.mode === LIGHT_THEME
                    ? SIDEBAR_SELECTED_LIGHT_BORDER
                    : SIDEBAR_SELECTED_DARK_BORDER,
                paddingBottom: '0.25rem',
              }}>
              <Grid item md={2}>
                <Typography component="h1" variant="h4">
                  Project Name
                </Typography>
              </Grid>
              <Grid item md={10}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  sx={{ width: '100%' }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ shrink: false }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Grid
              container
              spacing={2}
              sx={{
                borderBottom:
                  theme.palette.mode === LIGHT_THEME
                    ? SIDEBAR_SELECTED_LIGHT_BORDER
                    : SIDEBAR_SELECTED_DARK_BORDER,
                paddingBottom: '0.25rem',
              }}>
              <Grid item md={2}>
                <Typography component="h1" variant="h4">
                  Project Description
                </Typography>
              </Grid>
              <Grid item md={10}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  sx={{ width: '100%' }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  InputLabelProps={{ shrink: false }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Grid
              container
              spacing={2}
              sx={{
                borderBottom:
                  theme.palette.mode === LIGHT_THEME
                    ? SIDEBAR_SELECTED_LIGHT_BORDER
                    : SIDEBAR_SELECTED_DARK_BORDER,
                paddingBottom: '0.25rem',
                height: '46px',
              }}>
              <Grid item md={2}>
                <Typography component="h1" variant="h4">
                  Start Date
                </Typography>
              </Grid>
              <Grid item md={4}>
                <DatePicker
                  sx={{
                    width: '100%',
                    '.MuiOutlinedInput-root': {
                      borderRadius: '0px',
                      border: 'none',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      top: '-10px',
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
              <Grid item md={2}>
                <Typography component="h1" variant="h4">
                  End Date
                </Typography>
              </Grid>
              <Grid item md={4}>
                <DatePicker
                  sx={{
                    width: '100%',
                    height: '46px',
                    '.MuiOutlinedInput-root': {
                      borderRadius: '0px',
                      border: 'none',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      top: '-10px',
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
          <Box sx={{ mt: 5 }}>
            <Grid
              container
              spacing={2}
              sx={{
                borderBottom:
                  theme.palette.mode === LIGHT_THEME
                    ? SIDEBAR_SELECTED_LIGHT_BORDER
                    : SIDEBAR_SELECTED_DARK_BORDER,
                paddingBottom: '0.25rem',
              }}>
              <Grid item md={2}>
                <Typography component="h1" variant="h4">
                  Project Status
                </Typography>
              </Grid>
              <Grid item md={10}>
                <FormControl fullWidth variant="standard">
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
          <Box sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item md={1}>
                <Button type="submit" fullWidth variant="contained">
                  Create
                </Button>
              </Grid>
              <Grid item md={1}>
                <Button type="submit" fullWidth variant="outlined">
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
        </Box>
      </Container>
    </>
  );
};

export default CreateProject;
