const mongoose = require("mongoose");

const CreatureSchema = new mongoose.Schema(
  {
    owner: String,
    name: String,
    description: String,
    image: String,
    rarity: Number,
    environment: Number,
    size: Number,
    type: Number,
    race: Number,
    class: Number,
    subClass: Number,
    secondaryClass: Number,
    secondarySubClass: Number,
    movements: { speed: Number, flying: Number, swimming: Number, burrowing: Number },
    primaryAlignment: Number,
    secondaryAlignment: Number,
    attributes: {
      strength: Number,
      dexterity: Number,
      constitution: Number,
      intelligence: Number,
      wisdom: Number,
      charisma: Number,
    },
    hitPoints: Number,
    attack: Number,
    armorClass: Number,
    initiative: Number,
    weakSpots: [String],
    damagesEffectiveness: [{ _id: false, type: Number, value: Number }],
    conditionImmunities: [Number],
    languages: [Number],
    senses: {
      darkVision: Number,
      tremorsense: Number,
      blindSight: Number,
      trueSight: Number,
    },
    legendaryResistences: Number,
    regeneration: { amount: Number, breakDamage: Number },
    customSpecials: [{ _id: false, description: String, multiplier: Number }],
    actions: [
      {
        _id: false,
        name: String,
        description: String,
        type: Number,
        creatureActionPowerTotalPercentage: Number,
        reach: Number,
        frequency: Number,
        damageIntensity: Number,
        damageType: Number,
        condition: Number,
        conditionDuration: Number,
        difficultyClass: Number,
        savingThrowAttribute: Number,
        associatedWeakSpot: String,
        isSpell: Boolean,
        repetitions: Number,
      },
    ],
    reactions: [
      {
        _id: false,
        name: String,
        description: String,
        type: Number,
        creatureActionPowerTotalPercentage: Number,
        reach: Number,
        trigger: Number,
        triggerDescription: String,
        frequency: Number,
        damageIntensity: Number,
        damageType: Number,
        condition: Number,
        conditionDuration: Number,
        difficultyClass: Number,
        savingThrowAttribute: Number,
        associatedWeakSpot: String,
        isSpell: Boolean,
      },
    ],
    reactionsPerRound: Number,
    aura: {
      _id: false,
      name: String,
      description: String,
      type: Number,
      creatureActionPowerTotalPercentage: Number,
      reach: Number,
      frequency: Number,
      damageIntensity: Number,
      damageType: Number,
      condition: Number,
      conditionDuration: Number,
      difficultyClass: Number,
      savingThrowAttribute: Number,
      associatedWeakSpot: String,
    },
    treasures: [
      {
        _id: false,
        name: String,
        description: String,
        type: Number,
        goldPieces: {
          quantity: Number,
        },
        material: {
          rarity: Number,
          quantity: Number,
          weight: Number,
        },
        equipment: {
          type: Number,
          rarity: Number,
          damageType: Number,
          attribute: Number,
          ability: String,
        },
      },
    ],
  },
  { typeKey: "$type" }
);

module.exports = mongoose.model("Creature", CreatureSchema);
