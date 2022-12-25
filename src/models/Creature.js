const mongoose = require("mongoose");

const CreatureSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Creature", CreatureSchema);
