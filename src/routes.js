const { Router } = require("express");
const routes = Router();

const CreatureController = require("./controllers/CreatureController");
const CombatConfigController = require("./controllers/CombatConfigController");

routes.get("/GetCreature", CreatureController.GetCreature);
routes.get("/GetCreatures", CreatureController.GetCreatures);
routes.get("/GetCreaturesByOwner", CreatureController.GetCreaturesByOwner);
routes.post("/SaveCreature", CreatureController.SaveCreature);
routes.put("/UpdateCreature", CreatureController.UpdateCreature);
routes.delete("/DeleteCreature", CreatureController.DeleteCreature);

routes.get("/GetCombatConfig", CombatConfigController.GetCombatConfig);
routes.get("/GetCombatConfigByOwner", CombatConfigController.GetCombatConfigByOwner);
routes.get("/GetCombatConfigs", CombatConfigController.GetCombatConfigs);
routes.post("/SaveCombatConfig", CombatConfigController.SaveCombatConfig);
routes.put("/UpdateCombatConfig", CombatConfigController.UpdateCombatConfig);
routes.delete("/DeleteCombatConfig", CombatConfigController.DeleteCombatConfig);

module.exports = routes;
