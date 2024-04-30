const { Router } = require("express");
const routes = Router();

const CreatureController = require("./controllers/CreatureController");
const LocationController = require("./controllers/LocationController");
const CombatConfigController = require("./controllers/CombatConfigController");

routes.get("/GetCreature", CreatureController.GetCreature);
routes.get("/GetCreatures", CreatureController.GetCreatures);
routes.get("/GetCreaturesByOwner", CreatureController.GetCreaturesByOwner);
routes.post("/SaveCreature", CreatureController.SaveCreature);
routes.put("/UpdateCreature", CreatureController.UpdateCreature);
routes.delete("/DeleteCreature", CreatureController.DeleteCreature);

routes.get("/GetLocation", LocationController.GetLocation);
routes.get("/GetLocations", LocationController.GetLocations);
routes.get("/GetLocationsByOwner", LocationController.GetLocationsByOwner);
routes.post("/SaveLocation", LocationController.SaveLocation);
routes.put("/UpdateLocation", LocationController.UpdateLocation);
routes.put("/UpdateLocations", LocationController.UpdateLocations);
routes.put("/UpdateAllLocations", LocationController.UpdateAllLocations);
routes.delete("/DeleteLocations", LocationController.DeleteLocations);

routes.get("/GetCombatConfig", CombatConfigController.GetCombatConfig);
routes.get("/GetCombatConfigByOwner", CombatConfigController.GetCombatConfigByOwner);
routes.get("/GetCombatConfigs", CombatConfigController.GetCombatConfigs);
routes.post("/SaveCombatConfig", CombatConfigController.SaveCombatConfig);
routes.put("/UpdateCombatConfig", CombatConfigController.UpdateCombatConfig);
routes.delete("/DeleteCombatConfig", CombatConfigController.DeleteCombatConfig);

routes.get("/Ping", (req, res) => res.json(true));

module.exports = routes;
