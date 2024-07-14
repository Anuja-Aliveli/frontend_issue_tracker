import { useContext, useState } from 'react';
import AuthContext from './authContext';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { loginErrorsInterface } from './authInterface';
import { FIELD_REQUIRED } from '../../utils/constants';
import './auth.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [loginErrors, setLoginErrors] = useState<loginErrorsInterface>({
    userName: false,
    password: false,
  });

  const loginContextDetails = useContext(AuthContext);

  if (!loginContextDetails) {
    return <div>Loading...</div>;
  }

  const {
    userName,
    setUserName,
    password,
    setPassword,
    onLogin,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = loginContextDetails;

  const handleFieldChange = (field: string, value: string) => {
    switch (field) {
      case 'userName':
        setUserName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }

    if (value.trim() !== '') {
      setLoginErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    }
  };

  const handleSignInSubmit = (event: any) => {
    event.preventDefault();

    const newErrors = {
      userName: userName.trim() === '',
      password: password.trim() === '',
    };

    setLoginErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      onLogin();
    }
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          height: '100% !important',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100% !important',
          }}>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSignInSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  className="fieldName"
                  error={loginErrors.userName}
                  autoComplete="given-name"
                  name="User Name"
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                  helperText={loginErrors.userName && FIELD_REQUIRED}
                  value={userName}
                  onChange={(e) =>
                    handleFieldChange('userName', e.target.value)
                  }
                  inputProps={{ className: 'fieldName' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="fieldName"
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  error={loginErrors.password}
                  helperText={loginErrors.password && FIELD_REQUIRED}
                  value={password}
                  onChange={(e) =>
                    handleFieldChange('password', e.target.value)
                  }
                  inputProps={{ className: 'fieldName' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button
              className="authButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
