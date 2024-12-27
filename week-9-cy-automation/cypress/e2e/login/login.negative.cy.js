import loginPage from "../../page_objects/loginPage";
import homePage from "../../page_objects/homePage";

describe("Login Negative Tests", () => {
  
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("userPersonalDetails.json").as("userDetails");
    cy.fixture("validationMessages.json").as("messages");
    homePage.homePageLoginBtn.click();
  });

  it("Should not login with invalid Email and Password format", function () {
    loginPage.loginMethod(
      this.userDetails.invalid.email,
      this.userDetails.invalid.password
    );
    cy.contains(this.messages.invalidEmail).should("be.visible");
  });

  it("Should not login with null Email and Password", function () {
    loginPage.loginMethod(null, null);
    cy.contains(this.messages.msgEmail).should("be.visible");
  });
});
