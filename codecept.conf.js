exports.config = {
  output: "./output", // screenshot directory and contains screenshot of failed tests
  helpers: {
    Puppeteer: {
      url: "http://localhost:3000", // host url
      show: true,
      windowSize: "1200x900",
    },
  },
  include: {
    Page: "./pages/dashboardPage.js",
  },
  gherkin: {
    features: "./features/*.feature", // feature files location
    steps: ["./step_definitions/steps.js"], // step definitions location
  },
  plugins: {
    screenshotOnFail: {
      // if true take screenshot of failed scenarios
      enabled: true,
    },
    retryFailedStep: {
      // if true rerun failed tests
      enabled: true,
    },
  },
  name: "react-hooks", // name of the application folder
};
