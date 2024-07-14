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
import { registerErrorsInterface } from './authInterface';
import { FIELD_REQUIRED } from '../../utils/constants';
import './auth.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Register = () => {
  const [registerErrors, setRegisterErrors] = useState<registerErrorsInterface>(
    {
      userName: false,
      email: false,
      password: false,
      reEnterPassword: false,
    },
  );

  const registerContexDetails = useContext(AuthContext);

  if (!registerContexDetails) {
    return <div>Loading...</div>;
  }

  const {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    reEnterPassword,
    setReEnterPassword,
    onRegister,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = registerContexDetails;

  const handleFieldChange = (field: string, value: string) => {
    switch (field) {
      case 'userName':
        setUserName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'reEnterPassword':
        setReEnterPassword(value);
        break;
      default:
        break;
    }

    if (value.trim() !== '') {
      setRegisterErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    }
  };

  const handleSignUpSubmit = (event: any) => {
    event.preventDefault();

    const newErrors = {
      userName: userName.trim() === '',
      email: email.trim() === '',
      password: password.trim() === '',
      reEnterPassword: reEnterPassword.trim() === '',
    };

    setRegisterErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      onRegister();
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSignUpSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  className="fieldName"
                  error={registerErrors.userName}
                  autoComplete="given-name"
                  name="User Name"
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                  helperText={registerErrors.userName && FIELD_REQUIRED}
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={registerErrors.email}
                  helperText={registerErrors.email && FIELD_REQUIRED}
                  value={email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
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
                  error={registerErrors.password}
                  helperText={registerErrors.password && FIELD_REQUIRED}
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
              <Grid item xs={12}>
                <TextField
                  className="fieldName"
                  fullWidth
                  name="reEnterpassword"
                  label="ReEnter Password"
                  type="password"
                  id="reEnterPassword"
                  autoComplete="reEnter-password"
                  error={registerErrors.reEnterPassword}
                  helperText={registerErrors.reEnterPassword && FIELD_REQUIRED}
                  value={reEnterPassword}
                  onChange={(e) =>
                    handleFieldChange('reEnterPassword', e.target.value)
                  }
                  inputProps={{ className: 'fieldName' }}
                />
              </Grid>
            </Grid>
            <Button
              className="authButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;
