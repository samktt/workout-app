import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

import { db } from "../config/Firebase";
import { WorkoutSet } from "../types/Workout.types";

// Function to add a workout set to Firestore
export const addWorkoutSet = async (
  userId: number,
  workoutSetData: WorkoutSet
) => {
  try {
    console;
    const docRef = await addDoc(collection(db, "workoutSets"), workoutSetData);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding workout set: ", error);
    throw error;
  }
};
