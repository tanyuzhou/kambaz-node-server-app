import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  app.put("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    await dao.updateModule(moduleId, req.body);
    res.sendStatus(204);
  });

  app.delete("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    await dao.deleteModule(moduleId);
    res.sendStatus(204);
  });
}
