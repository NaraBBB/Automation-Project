import dashboardPage from "../../page_objects/dashboardPage";
import homePage from "../../page_objects/homePage";
import loginPage from "../../page_objects/loginPage";
import userData from "../../fixtures/data.json"

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should successfully login with valid credentials", function () {
    homePage.homePageLoginBtn.click()
    loginPage.loginMethod(userData.valid.email, userData.valid.password);
    dashboardPage.fullName.should("have.text", "Mara  B");
    dashboardPage.roleLabel.should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });
});
