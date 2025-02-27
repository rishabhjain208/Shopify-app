const shopify = require("../shopify.config");

async function injectSurveyScript() {
  const scriptTag = {
    event: "onload",
    src: "https://yourdomain.com/survey.js",
  };

  try {
    const result = await shopify.scriptTag.create(scriptTag);
    console.log("Script tag added:", result);
  } catch (error) {
    console.error("Error adding script tag:", error);
  }
}

injectSurveyScript();
