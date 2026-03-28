import Database from "../Database/index.js";

export const createUser = (user) => {
  const newUser = { ...user, _id: new Date().getTime().toString() };
  Database.users = [...Database.users, newUser];
  return newUser;
};

export const findAllUsers = () => Database.users;

export const findUserById = (userId) =>
  Database.users.find((u) => u._id === userId);

export const findUserByUsername = (username) =>
  Database.users.find((u) => u.username === username);

export const findUserByCredentials = (username, password) =>
  Database.users.find(
    (u) => u.username === username && u.password === password
  );

export const updateUser = (userId, user) => {
  const { users } = Database;
  const userToUpdate = users.find((u) => u._id === userId);
  Object.assign(userToUpdate, user);
  return userToUpdate;
};

export const deleteUser = (userId) => {
  const { users } = Database;
  Database.users = users.filter((u) => u._id !== userId);
};
