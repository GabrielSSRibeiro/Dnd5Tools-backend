const Creature = require("../models/Creature");

module.exports = {
  async GetCreature(req, res) {
    const creature = await Creature.findById(req.query.id);

    return res.json(creature);
  },

  async GetCreatures(req, res) {
    const creatures = await Creature.find();

    return res.json(creatures);
  },

  async GetCreaturesByOwner(req, res) {
    const creatures = await Creature.find({ owner: req.query.owner });

    return res.json(creatures);
  },

  async SaveCreature(req, res) {
    const creature = new Creature(req.body);
    const saveResponse = await creature.save();

    return res.json(saveResponse);
  },

  async UpdateCreature(req, res) {
    const updateResponse = await Creature.findOneAndUpdate(req.body._id, req.body);

    return res.json(updateResponse);
  },

  async DeleteCreature(req, res) {
    const deleteResponse = await Creature.findByIdAndDelete(req.query.id);

    return res.json(deleteResponse);
  },
};
