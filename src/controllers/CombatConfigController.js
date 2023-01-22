const { default: mongoose } = require("mongoose");
const CombatConfig = require("../models/CombatConfig");

module.exports = {
  async GetCombatConfig(req, res) {
    const combatConfig = await CombatConfig.findById(req.query.id);

    return res.json(combatConfig);
  },

  async GetCombatConfigByOwner(req, res) {
    const combatConfig = await CombatConfig.find({ owner: req.query.owner });

    return res.json(combatConfig[0]);
  },

  async GetCombatConfigs(req, res) {
    const combatConfig = await CombatConfig.find();

    return res.json(combatConfig);
  },

  async SaveCombatConfig(req, res) {
    req.body._id = mongoose.Types.ObjectId();
    const combatConfig = new CombatConfig(req.body);
    const saveResponse = await combatConfig.save();

    return res.json(saveResponse);
  },

  async UpdateCombatConfig(req, res) {
    const updateResponse = await CombatConfig.findOneAndUpdate({ _id: req.body._id }, req.body, { returnOriginal: false });

    return res.json(updateResponse);
  },

  async DeleteCombatConfig(req, res) {
    const deleteResponse = await CombatConfig.findByIdAndDelete(req.query.id);

    return res.json(deleteResponse);
  },
};
