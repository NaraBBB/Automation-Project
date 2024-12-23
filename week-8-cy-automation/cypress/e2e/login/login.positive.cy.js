import loginPage from "../../page_objects/loginPage";
import dashboardPage from "../../page_objects/dashboardPage";

describe("User Login Functionality", () => {
  beforeEach(function () {
    cy.visit("auth/login");
    cy.fixture("example").as("credentials");
  });

  it("should log in successfully with valid credentials", function () {
    loginPage.loginMethod(this.credentials.email, this.credentials.password);
    dashboardPage.roleLabel.should("have.text", "role: realtor");
  });
});
