const mongoose = require("mongoose");
const locationContext = require("./LocationContext");
const locationCreature = require("./LocationCreature");

const LocationSchema = new mongoose.Schema(
  {
    owner: String,
    name: String,
    exteriorLocationId: String,
    radiusMultiplier: Number,
    size: Number,
    traversal: {
      type: Number,
      irregularTerrainFrequency: Number,
      partitions: [
        {
          _id: false,
          type: Number,
          magnitude: Number,
          quantity: Number,
        },
      ],
      elements: [
        {
          _id: false,
          type: Number,
          frequency: Number,
          groupSize: Number,
          hazardousness: Number,
          // condition: Number,
          // conditionDuration: Number,
          // difficultyClass: Number,
          // savingThrowAttribute: Number,
          // damageIntensity: Number,
          // damageType: Number,
          material: {
            Probability: Number,
            rarity: Number,
            // extractionDifficulty: Number,
          },
        },
      ],
    },
    interaction: {
      isCurrent: Boolean,
      type: Number,
      isHazardous: Boolean,
      // condition: Number,
      // conditionDuration: Number,
      // difficultyClass: Number,
      // savingThrowAttribute: Number,
      // damageIntensity: Number,
      // damageType: Number,
      rarity: Number,
    },
    reference: {
      distance: Number,
      direction: Number,
      location: String,
      connectionType: Number,
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
  { typeKey: "$type" }
);

module.exports = mongoose.model("Location", LocationSchema);
