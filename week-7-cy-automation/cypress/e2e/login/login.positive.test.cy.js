import loginPage from "../../page_objects/loginPage";
import homePage from "../../page_objects/homePage";
import dashboardPage from "../../page_objects/dashboardPage";

describe("Login Tests", () => {
  beforeEach(function () {
    cy.visit("/login");
    cy.fixture("example").as("data");
  });

  it("Should successfully login with valid credentials", function () {
    homePage.homePageLoginBtn.click();
    loginPage.loginMethod(this.data.valid.email, this.data.valid.password);
    dashboardPage.fullName.should("have.text", "Mara  B");
    dashboardPage.roleLabel.should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });
});
