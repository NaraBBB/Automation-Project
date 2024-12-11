import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";

describe("Login Negative Tests", () => {
  beforeEach(function () {
    cy.visit("login/");
    cy.fixture("example").as("data");
  });

  it("should show error message for invalid credentials", function () {
    homePage.loginPageBtn.click();

    loginPage.loginMethod(this.data.invalid.email, this.data.invalid.password);
    loginPage.loginBtn.click();
    cy.contains("Email must be a valid email address").should("be.visible");
  });
});
