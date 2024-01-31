const mongoose = require("mongoose");
const locationContext = require("./LocationContext");
const locationCreature = require("./LocationCreature");

const LocationSchema = new mongoose.Schema(
  {
    owner: String,
    name: String,
    exteriorLocationId: String,
    isHidden: Boolean,
    radiusMultiplier: Number,
    distanceMultiplier: Number,
    distanceAngle: Number,
    size: Number,
    traversal: {
      type: Number,
      // irregularTerrainFrequency: Number,
      // partitions: [
      //   {
      //     _id: false,
      //     type: Number,
      //     magnitude: Number,
      //     quantity: Number,
      //   },
      // ],
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
            probability: Number,
            rarity: Number,
            // extractionDifficulty: Number,
          },
        },
      ],
    },
    interaction: {
      type: Number,
      isHazardous: Boolean,
      rarity: Number,
      rooms: [
        {
          _id: false,
          purpose: String,
          firstImpressions: String,
          secrets: String,
          size: Number,
          height: Number,
          top: Number,
          bottom: Number,
          left: Number,
          right: Number,
          floor: {
            connection: Number,
            direction: Number,
          },
          ceiling: {
            connection: Number,
            direction: Number,
          },
          type: Number,
          isHazardous: Boolean,
          rarity: Number,
          creatures: [
            {
              _id: false,
              ...locationCreature,
            },
          ],
          currentCreatures: [
            {
              _id: false,
              creatureId: String,
              current: Number,
            },
          ],
        },
      ],
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
