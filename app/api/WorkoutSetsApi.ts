import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import { ExerciseItem } from "../types/Workout.types";
import { auth, db } from "../config/Firebase";

const getCurrentUserId = (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          resolve(user.uid);
        } else {
          resolve(null);
        }
      },
      reject
    );
  });
};

export const addExercise = async (
  userId: string,
  exerciseItem: ExerciseItem
) => {
  try {
    const userId = await getCurrentUserId();

    if (!userId) {
      throw new Error("User is not authenticated");
    }
    const workoutRef = collection(db, `users/${userId}/workouts`);
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
