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
      currentCreatures: [
        {
          _id: false,
          creatureId: String,
          current: Number,
        },
      ],
      rooms: [
        {
          _id: false,
          purpose: String,
          firstImpressions: String,
          secrets: String,
          size: Number,
          height: Number,
          top: {
            connection: Number,
            description: String,
          },
          bottom: {
            connection: Number,
            description: String,
          },
          left: {
            connection: Number,
            description: String,
          },
          right: {
            connection: Number,
            description: String,
          },
          floor: {
            connection: Number,
            description: String,
            direction: Number,
          },
          ceiling: {
            connection: Number,
            description: String,
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
