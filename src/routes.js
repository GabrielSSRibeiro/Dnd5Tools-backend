const { Router } = require("express");
const routes = Router();

const CreatureController = require("./controllers/CreatureController");

routes.get("/GetCreature", CreatureController.show);
routes.get("/GetCreatures", CreatureController.index);
routes.post("/SaveCreature", CreatureController.store);
routes.put("/UpdateCreature", CreatureController.update);
routes.delete("/DeleteCreature", CreatureController.delete);

module.exports = routes;
