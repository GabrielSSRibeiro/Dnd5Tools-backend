const mongoose = require("mongoose");
const travelNode = require("./TravelNode");
const locationContext = require("./LocationContext");
const locationCreature = require("./LocationCreature");

const CombatConfigSchema = new mongoose.Schema(
  {
    owner: String,
    level: Number,
    characterGroups: [[String]],
    inactiveGroup: [String],
    zoom: Number,
    travel: {
      schedule: Number,
      exhaustionTimer: Number,
      precipitation: Number,
      oriented: Boolean,
      temperature: Number,
      nextConditionsUpdate: Number,
      pace: Number,
      mount: Number,
      load: Number,
      currentNode: travelNode,
      travelNodes: [
        {
          _id: false,
          ...travelNode,
        },
      ],
    },
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
