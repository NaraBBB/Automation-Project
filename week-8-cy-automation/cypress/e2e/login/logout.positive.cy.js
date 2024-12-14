import loginPage from "../../page_objects/loginPage";
import dashboardPage from "../../page_objects/dashboardPage";
describe("User Logout Functionality", () => {
  beforeEach(function () {
    cy.visit("auth/login");
    cy.fixture("example").as("credentials");
  });

  it("Should log out successfully and redirect  to the main page", function () {
    loginPage.loginMethod(this.credentials.email, this.credentials.password);
    dashboardPage.userIconMenu.click();
    dashboardPage.logoutButton.click();
    cy.url().should("contains", "/auth/login");
  });
});
