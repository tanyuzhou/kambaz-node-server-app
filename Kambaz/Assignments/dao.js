import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findAllAssignments = () => model.find();

export const findAssignmentsForCourse = (courseId) =>
  model.find({ course: courseId });

export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
};

export const deleteAssignment = (assignmentId) =>
  model.deleteOne({ _id: assignmentId });

export const updateAssignment = (assignmentId, assignmentUpdates) => {
  const updates = { ...assignmentUpdates };
  delete updates._id;
  return model.updateOne({ _id: assignmentId }, { $set: updates });
};
