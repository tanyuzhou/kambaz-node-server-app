import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  app.put("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    dao.updateModule(moduleId, moduleUpdates);
    res.sendStatus(204);
  });

  app.delete("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    dao.deleteModule(moduleId);
    res.sendStatus(204);
  });
}
