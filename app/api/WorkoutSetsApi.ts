import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";

import { db } from "../config/Firebase";
import { WorkoutSet } from "../types/Workout.types";

export const addWorkout = async (
  userId: string,
  exercise: string,
  sets: WorkoutSet[]
) => {
  const workoutRef = collection(db, `users/${userId}/workouts`);
  const timestamp = Timestamp.fromDate(new Date());

  try {
    const docRef = await addDoc(workoutRef, {
      exercise: exercise,
      sets: sets,
      timestamp: timestamp,
    });

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding workout: ", error);
    throw error;
  }
};
