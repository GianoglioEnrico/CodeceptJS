const { I } = inject();
// Add in your custom step files

const dashboard = require("../pages/dashboardPage");

Given("the user has browsed to the homepage", () => I.amOnPage("/"));

When(
  "the user adds user with name {string} and username {string} using the webUI",
  (name, username) => {
    dashboard.addUser(name, username);
  }
);

Then(
  "user with name {string} and username {string} should be listed on users table",
  (name, username) => {
    I.see(name);
    I.see(username);
  }
);
