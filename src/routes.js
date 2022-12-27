const { Router } = require("express");
const routes = Router();

const CreatureController = require("./controllers/CreatureController");

routes.get("/GetCreature", CreatureController.GetCreature);
routes.get("/GetCreatures", CreatureController.GetCreatures);
routes.get("/GetCreaturesByOwner", CreatureController.GetCreaturesByOwner);
routes.post("/SaveCreature", CreatureController.SaveCreature);
routes.put("/UpdateCreature", CreatureController.UpdateCreature);
routes.delete("/DeleteCreature", CreatureController.DeleteCreature);

module.exports = routes;
