// import Survey from "../models/Survey.js";
const Survey = require("../models/Survey");

module.exports.submitSurvey = async (req, res) => {
  try {
    const { customerId, answers } = req.body;
    const newSurvey = new Survey({ customerId, answers });
    await newSurvey.save();
    res.status(201).json({ message: "Survey submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports.getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
