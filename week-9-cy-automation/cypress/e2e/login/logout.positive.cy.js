import dashboardPage from "../../page_objects/dashboardPage";

describe("User Logout Functionality", () => {
  beforeEach(function () {
    cy.log_in();
    cy.visit("/dashboard/user/profile");
  });

  it("Should log out successfully and redirect  to the main page", function () {
    dashboardPage.userIconMenu.click();
    dashboardPage.logoutBtn.click();
    cy.url().should("includes", "/auth/login");
  });
});
