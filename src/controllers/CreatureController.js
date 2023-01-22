const { default: mongoose } = require("mongoose");
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
    let creatures = [];
    if (req.query.owner === process.env.ADMIN_USER) {
      creatures = await Creature.find();
    } else {
      creatures = await Creature.find({ $or: [{ owner: process.env.ADMIN_USER }, { owner: req.query.owner }] });
      creatures
        .filter((c) => c.owner === process.env.ADMIN_USER)
        .forEach((c) => {
          c.owner = "basicPack";
        });
    }

    return res.json(creatures);
  },

  async SaveCreature(req, res) {
    req.body._id = mongoose.Types.ObjectId();
    const creature = new Creature(req.body);
    const saveResponse = await creature.save();

    return res.json(saveResponse);
  },

  async UpdateCreature(req, res) {
    const updateResponse = await Creature.findOneAndUpdate({ _id: req.body._id }, req.body, { returnOriginal: false });

    return res.json(updateResponse);
  },

  async DeleteCreature(req, res) {
    const deleteResponse = await Creature.findByIdAndDelete(req.query.id);

    return res.json(deleteResponse);
  },
};
