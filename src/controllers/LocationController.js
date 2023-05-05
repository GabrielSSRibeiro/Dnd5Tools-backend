const { default: mongoose } = require("mongoose");
const Location = require("../models/Location");

module.exports = {
  async GetLocation(req, res) {
    const location = await Location.findById(req.query.id);

    return res.json(location);
  },

  async GetLocations(req, res) {
    const locations = await Location.find();

    return res.json(locations);
  },

  async GetLocationsByOwner(req, res) {
    const locations = await Location.find({ owner: req.query.owner });

    return res.json(locations);
  },

  async SaveLocation(req, res) {
    req.body._id = mongoose.Types.ObjectId();
    const location = new Location(req.body);
    const saveResponse = await location.save();

    return res.json(saveResponse);
  },

  async UpdateLocation(req, res) {
    const updateResponse = await Location.findOneAndUpdate({ _id: req.body._id }, req.body, { returnOriginal: false });

    return res.json(updateResponse);
  },

  async DeleteLocation(req, res) {
    const deleteResponse = await Location.findByIdAndDelete(req.query.id);

    return res.json(deleteResponse);
  },
};
