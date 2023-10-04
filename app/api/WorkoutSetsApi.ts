import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../config/Firebase";
import { ExerciseItem } from "../types/Workout.types";

export const addExercise = async (
  userId: string,
  exerciseItem: ExerciseItem
) => {
  const workoutRef = collection(db, `users/${userId}/workouts`);

  try {
    const docRef = await addDoc(workoutRef, exerciseItem);

    console.log("Exercise added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding exercise: ", error);
    throw error;
  }
};

export const getUserExercises = async (userId: string) => {
  const workoutRef = collection(db, `users/${userId}/workouts`);
  const q = query(workoutRef);

  try {
    const querySnapshot = await getDocs(q);
    const workouts: ExerciseItem[] = [];

    querySnapshot.forEach((doc) => {
      const exerciseItem: ExerciseItem = {
        id: doc.id,
        ...doc.data(),
      } as ExerciseItem;
      workouts.push(exerciseItem);
    });

    return workouts;
  } catch (error) {
    console.error("Error fetching user workouts: ", error);
    throw error;
  }
};

export const updateWorkout = async (
  userId: string,
  workoutId: string,
  updatedData: ExerciseItem
) => {
  const workoutRef = doc(db, `users/${userId}/workouts`, workoutId);

  try {
    await updateDoc(workoutRef, updatedData);
    console.log("Workout updated successfully!");
  } catch (error) {
    console.error("Error updating workout: ", error);
    throw error;
  }
};
