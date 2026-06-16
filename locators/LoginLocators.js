class LoginLocators {
  constructor(page) {
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.dashboardHeader = page.locator("h6");
  }
}

module.exports = LoginLocators;