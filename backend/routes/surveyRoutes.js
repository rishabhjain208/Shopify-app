const express = require("express");
const {
  submitSurvey,
  getSurveys,
} = require("../controllers/surveyController.js");
const router = express.Router();

router.post("/submit", submitSurvey);
router.get("/", getSurveys);
module.exports = router;
