import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { ConfirmDialogProps } from '../../Interfaces/sharedInterface';
import {
  DARK_BG_COLOR,
  DARK_THEME,
  ERROR_DARK_COLOR,
  ERROR_LIGHT_COLOR,
  LIGHT_BG_COLOR,
} from '../../utils/constants';

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const theme = useTheme();
  const {
    isOpen,
    handleConfirmDialogClose,
    handleConfirmDialogConfirm,
    modalContent,
    modalTitle,
  } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <Dialog
        open={modalOpen}
        onClose={handleConfirmDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          background:
            theme.palette.mode === DARK_THEME ? DARK_BG_COLOR : LIGHT_BG_COLOR,
        }}>
        {modalTitle && (
          <DialogTitle id="alert-dialog-title">
            <Typography component="h1" variant="h2">
              <b>{modalTitle}</b>
            </Typography>
          </DialogTitle>
        )}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box display="flex" flexDirection="column" alignItems="center">
              <ErrorOutlineIcon
                sx={{
                  color:
                    theme.palette.mode === DARK_THEME
                      ? ERROR_DARK_COLOR
                      : ERROR_LIGHT_COLOR,
                  marginBottom: '10px',
                }}
                fontSize="large"
              />
              <Typography component="h1" variant="h2">
                <b>{modalContent}</b>
              </Typography>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleConfirmDialogClose}
            sx={{
              color:
                theme.palette.mode === DARK_THEME
                  ? ERROR_DARK_COLOR
                  : ERROR_LIGHT_COLOR,
            }}>
            <b> NO</b>
          </Button>
          <Button onClick={handleConfirmDialogConfirm}>
            <b>YES</b>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmDialog;
