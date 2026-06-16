const BasePage = require("./BasePage");
const LoginLocators = require("../locators/LoginLocators");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new LoginLocators(page);
    this.url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  }

  async open() {
    await this.goto(this.url);

    await this.locators.usernameInput.waitFor({
      state: "visible",
      timeout: 15000,
    });
  }

  async login(username, password) {
    await this.fill(this.locators.usernameInput, username);
    await this.fill(this.locators.passwordInput, password);
    await this.click(this.locators.loginButton);

    await this.page.waitForTimeout(3000);
  }

  async isLoggedIn() {
    try {
      await this.page.waitForURL(/dashboard/, {
        timeout: 15000,
      });

      return true;
    } catch {
      return false;
    }
  }

  async safeLogin() {
    try {
      await this.open();
      await this.login("Admin", "admin123");

      return await this.isLoggedIn();
    } catch {
      return false;
    }
  }
}

module.exports = LoginPage;