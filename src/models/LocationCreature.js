module.exports = {
  creatureId: String,
  groupSize: Number,
  routines: [
    {
      _id: false,
      schedule: Number,
      precipitation: Number,
      temperature: Number,
      context: String,
      encounterFrequency: Number,
    },
  ],
};
