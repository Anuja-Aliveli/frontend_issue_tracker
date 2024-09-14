import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import { formatDateTime } from '../../utils/sharedFunctions';
import { ActivityTrailInterfaceProps } from '../../Interfaces/sharedInterface';

const ActivityTrail = (props: ActivityTrailInterfaceProps) => {
  const { steps } = props;
  return (
    <>
      <Stepper orientation="vertical" nonLinear>
        {steps.map((step, index) => (
          <Step key={index} active={true}>
            <StepLabel
              StepIconComponent={() => (
                <TimelineIcon fontSize="small" color="primary" />
              )}>
              <Typography
                component="h1"
                variant="h4"
                sx={{ marginRight: '20px' }}>
                {step.label}
              </Typography>
              <Typography
                component="h1"
                variant="caption"
                color="textSecondary">
                {formatDateTime(step.created_at)}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography component="h1" variant="body2">
                {step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default ActivityTrail;
