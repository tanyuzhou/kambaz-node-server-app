import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.json(enrollments);
  });
  
  app.post("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const newEnrollment = dao.enrollUserInCourse(userId, courseId);
    res.send(newEnrollment);
  });

  app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    dao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(204);
  });
}
