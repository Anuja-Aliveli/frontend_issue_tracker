import { Box, Typography, Grid, useTheme, Tooltip } from '@mui/material';
import { CountCardProps } from '../../Interfaces/sharedInterface';
import {
  DARK_BG_COLOR,
  DARK_THEME,
  LIGHT_BG_COLOR,
} from '../../utils/constants';

const CountCard = (props: CountCardProps) => {
  const theme = useTheme();
  const { cardsData } = props;

  if (!cardsData || cardsData.length === 0) {
    return null;
  }

  return (
    <Box padding={2}>
      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Box
              className="count-card"
              sx={{
                backgroundColor:
                  theme.palette.mode === DARK_THEME
                    ? DARK_BG_COLOR
                    : LIGHT_BG_COLOR,
                color: card.color,
                padding: 2,
                borderRadius: 2,
                textAlign: 'center',
                border: 'none',
                borderLeft: `2px solid ${card.color}`,
              }}>
              <Typography component="h1" variant="h3">
                {card.count}
              </Typography>
              <Tooltip title={card.label}>
                <Typography
                  component="h2"
                  variant="h4"
                  className="text-overflow">
                  {card.label}
                </Typography>
              </Tooltip>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CountCard;
