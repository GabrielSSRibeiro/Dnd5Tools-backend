const mongoose = require("mongoose");
const locationContext = require("./LocationContext");
const locationCreature = require("./LocationCreature");

const CombatConfigSchema = new mongoose.Schema(
  {
    owner: String,
    level: Number,
    characterGroups: [[String]],
    inactiveGroup: [String],
    world: {
      name: String,
      traversal: {
        type: Number,
        irregularTerrainFrequency: Number,
      },
      contexts: [
        {
          _id: false,
          ...locationContext,
        },
      ],
      creatures: [
        {
          _id: false,
          ...locationCreature,
        },
      ],
    },
  },
  { typeKey: "$type" }
);

module.exports = mongoose.model("CombatConfig", CombatConfigSchema);
