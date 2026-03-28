import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    dao.updateAssignment(assignmentId, assignmentUpdates);
    res.sendStatus(204);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    dao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  });
}
