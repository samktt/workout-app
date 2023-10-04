export type WorkoutSet = {
  reps: number;
  actualReps: number;
};

export type Workout = {
  id: number;
  title: string;
  imageUrl: number;
  frontImageUrl?: number;
  sets: WorkoutSet[];
};

export type ExerciseItem = {
  id: string;
  exercise: string;
  sets: WorkoutSet[];
};
