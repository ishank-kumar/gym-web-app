import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />

      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />

      {/* 👇 Add padding-top to ensure the scroll target isn't hidden behind navbar */}
      <Box id="exercises" sx={{ paddingTop: '80px' }}>
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart} 
        />
      </Box>
    </Box>
  );
};

export default Home;
