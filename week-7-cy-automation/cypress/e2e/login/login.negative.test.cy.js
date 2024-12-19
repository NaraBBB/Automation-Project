import homePage from "../../page_objects/homePage";
import loginPage from "../../page_objects/loginPage";

describe("Login Negative Tests", () => {
  beforeEach(function () {
    cy.visit("login/");
    cy.fixture("example").as("data");
  });

  it("should show error message for invalid credentials", function () {
    homePage.homePageLoginBtn.click();
    loginPage.loginMethod(this.data.invalid.email, this.data.invalid.password);
    loginPage.loginBtn.click();
    cy.contains("Email must be a valid email address").should("be.visible");
  });
});
