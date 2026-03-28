import Database from "../Database/index.js";

export function findAllEnrollments() {
  return Database.enrollments;
}

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = { _id: new Date().getTime().toString(), user: userId, course: courseId };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
}

export function findCoursesForUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}
