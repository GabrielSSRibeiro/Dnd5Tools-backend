module.exports = {
  name: String,
  notes: String,
  findResourcesDifficulty: Number,
  materialRarity: Number,
  isHazardous: Boolean,
  creatures: [
    {
      _id: false,
      creatureId: String,
      isDead: Boolean,
      condition: Number,
    },
  ],
  x: Number,
  y: Number,
  angle: Number,
  locId: String,
  needsReposition: Boolean,
  roomIndex: Number,
};
