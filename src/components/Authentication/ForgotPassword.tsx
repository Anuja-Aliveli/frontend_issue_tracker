import { useContext, useState } from 'react';
import AuthContext from './authContext';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import {
  FIELD_REQUIRED,
  OPT_NOT_ENTERED,
  OTP_ALL_FIELDS,
  OTP_NOT_MATCHED,
} from '../../utils/constants';
import './auth.css';
import { ForgotPasswordSteps } from '../../Interfaces/authInterface';

const ForgotPassword = () => {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [otp, setOtp] = useState(Array(6).fill(''));

  const forgotPasswordDetails = useContext(AuthContext);

  if (!forgotPasswordDetails) {
    return <div>Loading...</div>;
  }

  const {
    email,
    setEmail,
    isLoading,
    onForgotPassword,
    showStep,
    setShowStep,
    checkEmailError,
    setCheckEmailError,
    getEmailData,
  } = forgotPasswordDetails;

  const handleFieldChange = (value: string) => {
    setEmail(value);
    setEmailError(null);
    setCheckEmailError('');
  };

  const handleEmailSubmit = (event: any) => {
    event.preventDefault();

    if (!email) {
      setEmailError(FIELD_REQUIRED);
    } else {
      setEmailError(null);
      onForgotPassword(email);
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    setCheckEmailError('');
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const verifyOTPEntered = (event: any) => {
    event.preventDefault();
    if (otp.every((digit) => digit === '')) {
      setCheckEmailError(OPT_NOT_ENTERED);
    } else if (otp.some((digit) => digit === '')) {
      setCheckEmailError(OTP_ALL_FIELDS);
    } else if (otp.join('') !== getEmailData?.verification_code) {
      setCheckEmailError(OTP_NOT_MATCHED);
    } else {
      setCheckEmailError('');
      otp.fill('');
      setShowStep(ForgotPasswordSteps.Reset);
    }
  };

  const renderEmailVerificationStep = () => (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            className="fieldName"
            error={Boolean(emailError)}
            autoComplete="given-name"
            name="Email"
            fullWidth
            id="Email"
            label="Email"
            autoFocus
            helperText={emailError}
            value={email}
            onChange={(e) => handleFieldChange(e.target.value)}
            inputProps={{ className: 'fieldName' }}
          />
        </Grid>
      </Grid>
      <Button
        className="authButton"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={email === ''}
        onClick={handleEmailSubmit}>
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Get OTP'}
      </Button>
    </>
  );

  const renderOTPVerificationStep = () => (
    <>
      <Grid container spacing={2} justifyContent="center">
        {otp.map((data, index) => (
          <Grid
            item
            key={index}
            sx={{
              width: { xs: '2.7rem', md: '3.3rem' },
              height: { xs: '3rem', md: '3.3rem' },
            }}>
            <TextField
              className="fieldName"
              name={`otp-${index}`}
              fullWidth
              id={`otp-${index}`}
              label=""
              value={data}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              inputProps={{
                className: 'fieldName',
                maxLength: 1,
                style: { textAlign: 'center' },
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        className="authButton"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={verifyOTPEntered}>
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          'Verify OTP'
        )}
      </Button>
    </>
  );

  return (
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
          {showStep === ForgotPasswordSteps.Email
            ? 'Verify Email'
            : 'Reset Password'}
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          {checkEmailError && (
            <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
              * {checkEmailError}
            </Typography>
          )}

          {showStep === ForgotPasswordSteps.Otp && (
            <Typography
              variant="body2"
              sx={{ marginBottom: 2, textAlign: 'center' }}>
              We have sent a 6 digit OTP to your mail
            </Typography>
          )}

          {showStep === ForgotPasswordSteps.Email ? (
            renderEmailVerificationStep()
          ) : showStep === ForgotPasswordSteps.Otp ? (
            renderOTPVerificationStep()
          ) : (
            <p>Hello</p>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
