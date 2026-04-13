import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findAllModules = () => model.find();

export const findModulesForCourse = (courseId) =>
  model.find({ course: courseId });

export const createModule = (module) => {
  const newModule = { ...module, _id: uuidv4() };
  return model.create(newModule);
};

export const deleteModule = (moduleId) =>
  model.deleteOne({ _id: moduleId });

export const updateModule = (moduleId, moduleUpdates) => {
  const updates = { ...moduleUpdates };
  delete updates._id;
  return model.updateOne({ _id: moduleId }, { $set: updates });
};
