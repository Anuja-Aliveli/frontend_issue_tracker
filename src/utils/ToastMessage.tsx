import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Snackbar, Alert, AlertColor } from '@mui/material';

type ToastProps = {
  message: string;
  severity: AlertColor;
};

let showToast: (toast: ToastProps) => void;

const ToastManager = () => {
  const [toast, setToast] = useState<ToastProps & { open: boolean }>({
    open: false,
    message: '',
    severity: 'info',
  });

  showToast = ({ message, severity }: ToastProps) => {
    setToast({ open: true, message, severity });
  };

  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <Snackbar
      open={toast.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert
        onClose={handleClose}
        severity={toast.severity}
        sx={{ width: '100%' }}
        variant="filled">
        {toast.message}
      </Alert>
    </Snackbar>
  );
};

export const initToastManager = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<ToastManager />, div);
};

export const toast = {
  success(message: string) {
    showToast({ message, severity: 'success' });
  },
  error(message: string) {
    showToast({ message, severity: 'error' });
  },
  info(message: string) {
    showToast({ message, severity: 'info' });
  },
  warning(message: string) {
    showToast({ message, severity: 'warning' });
  },
};
