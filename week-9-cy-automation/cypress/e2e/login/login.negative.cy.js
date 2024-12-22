import loginPage from "../../page_objects/loginPage";
import homePage from "../../page_objects/homePage";

describe("Login Negative Tests", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("data.json").as("userData");
    cy.fixture("verificationTexts.json").as("messages");
    homePage.homePageLoginBtn.click();
  });

  it("Should not login with invalid Email and Password format", function () {
    loginPage.loginMethod(
      this.userData.invalid.email,
      this.userData.invalid.password
    );
    cy.contains(this.messages.invalidEmail).should("be.visible");
  });

  it("Should not login with null Password", function () {
    loginPage.loginMethod(null, this.userData.valid.password);
    cy.contains(this.messages.msgEmail).should("be.visible");
  });

  it("Should not login with null Password", function () {
    loginPage.loginMethod(this.userData.valid.email, null);
    cy.contains(this.messages.msgPassword).should("be.visible");
  });
});
