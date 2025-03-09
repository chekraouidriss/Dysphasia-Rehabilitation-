import React, { createContext, useContext, useState } from 'react';

const ExerciseNumberContext = createContext();

export const ExerciseNumberProvider = ({ children }) => {
  const [exerciseNumber, setExerciseNumber] = useState(1);

  return (
    <ExerciseNumberContext.Provider value={{ exerciseNumber, setExerciseNumber }}>
      {children}
    </ExerciseNumberContext.Provider>
  );
};

export const useExerciseNumber = () => useContext(ExerciseNumberContext);
