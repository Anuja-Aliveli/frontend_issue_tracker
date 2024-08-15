import { Box, Typography, Grid } from '@mui/material';
import { CountCardProps } from '../../Interfaces/sharedInterface';

const CountCard = (props: CountCardProps) => {
  const { cardsData } = props;
  if (cardsData.length === 0) {
    return null;
  }

  return (
    <Box>
      <Grid container spacing={2} padding={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Box
              sx={{
                backgroundColor: card.bg,
                color: card.color,
                padding: 2,
                borderRadius: 2,
                textAlign: 'center',
              }}>
              <Typography component="h1" variant="h3">
                {card.count}
              </Typography>
              <Typography component="h1" variant="h4">
                {card.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CountCard;
