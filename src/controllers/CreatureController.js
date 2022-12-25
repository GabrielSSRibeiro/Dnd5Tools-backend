const Creature = require("../models/Creature");

module.exports = {
  async show(req, res) {
    const creature = await Creature.findById(req.query.id);

    return res.json(creature);
  },

  async index(req, res) {
    const creatures = await Creature.find();

    return res.json(creatures);
  },

  async store(req, res) {
    const creature = new Creature(req.body);
    const saveResponse = await creature.save();

    return res.json(saveResponse);
  },

  async update(req, res) {
    const updateResponse = await Creature.findOneAndUpdate(req.body.id, req.body);

    return res.json(updateResponse);
  },

  async delete(req, res) {
    const deleteResponse = await Creature.findByIdAndDelete(req.query.id);

    return res.json(deleteResponse);
  },
};
