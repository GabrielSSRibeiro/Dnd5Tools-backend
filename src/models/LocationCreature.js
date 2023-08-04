module.exports = {
  creatureId: String,
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
