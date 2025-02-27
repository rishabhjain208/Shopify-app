const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
  customerId: { type: String, required: true },
  answers: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Survey", SurveySchema);
