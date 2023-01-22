const mongoose = require("mongoose");

const CombatConfigSchema = new mongoose.Schema({
  owner: String,
  level: Number,
  characterGroups: [[String]],
  inactiveGroup: [String],
});

module.exports = mongoose.model("CombatConfig", CombatConfigSchema);
