import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      style={{ textDecoration: 'none' }}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        style={{ width: '100%', height: 'auto', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
      />
      <Stack direction="row" spacing={1} mt={2} pl={2}>
        <Button
          sx={{
            backgroundColor: '#FFA9A9',
            color: '#fff',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            backgroundColor: '#FCC757',
            color: '#fff',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        pl={2}
        mt="11px"
        pb="10px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: '24px', xs: '20px' }, textTransform: 'capitalize' }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
