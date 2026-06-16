class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });
  }

  async click(locator) {
    await locator.click({ timeout: 10000 });
  }

  async fill(locator, value) {
    await locator.fill(value, { timeout: 10000 });
  }

  async takeScreenshot(path) {
    await this.page.screenshot({
      path,
      fullPage: true,
    });
  }
}

module.exports = BasePage;