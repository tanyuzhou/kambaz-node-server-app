import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findAllEnrollments = () => model.find();

export const enrollUserInCourse = (userId, courseId) => {
  const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
  return model.create(newEnrollment);
};

export const unenrollUserFromCourse = (userId, courseId) =>
  model.deleteOne({ user: userId, course: courseId });

export const findCoursesForUser = (userId) =>
  model.find({ user: userId });

export const findUsersForCourse = (courseId) =>
  model.find({ course: courseId });
