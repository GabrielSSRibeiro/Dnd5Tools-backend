module.exports = {
  creatureId: String,
  population: {
    value: Number,
    current: Number,
  },
  routines: [
    {
      _id: false,
      schedule: Number,
      precipitation: Number,
      temperature: Number,
      context: String,
      groupSize: Number,
      encounterFrequency: Number,
    },
  ],
};
