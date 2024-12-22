import loginPage from "../../page_objects/loginPage";
import homePage from "../../page_objects/homePage";
import user from "../../fixtures/data.json"
describe("Login Negative Tests", () => {
  beforeEach(function () {
    cy.visit("login/");
    cy.fixture("data.json").as("data");
  });

  it("should show error message for invalid credentials", function () {
    homePage.homePageLoginBtn.click();
    loginPage.loginMethod(user.invalid.email,user.invalid.password);
    cy.contains("Email must be a valid email address").should("be.visible");
  });
});
