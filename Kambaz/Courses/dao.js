import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findAllCourses = () => model.find();

export const findCourseById = (id) => model.findById(id);

export const createCourse = (course) => {
  const newCourse = { ...course, _id: uuidv4() };
  return model.create(newCourse);
};

export const deleteCourse = (courseId) =>
  model.deleteOne({ _id: courseId });

export const updateCourse = (courseId, courseUpdates) =>
  model.updateOne({ _id: courseId }, { $set: courseUpdates });
