const { I } = inject();

module.exports = {
  elements: {
    addNewUserButton: '//button[contains(text(),"Add new user")]',
    name: String("name"),
    username: String("username"),
  },
  addUser(name, username) {
    I.waitForVisible(this.elements.addNewUserButton);
    I.fillField(this.elements.name, name);
    I.fillField(this.elements.username, username);
    I.click(this.elements.addNewUserButton);
  },
};
