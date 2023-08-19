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
      number: Number,
    },
  ],
  x: Number,
  y: Number,
  angle: Number,
  locId: String,
};
