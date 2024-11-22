import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login Tests", () => {
  beforeEach(function () {
    cy.viewport(1366, 768);
    cy.visit("/login");
    cy.fixture("example").as("data");
  });
  it("Should successfully login with valid credentials", function () {
    homePage.loginPageBtn.click();

    loginPage.loginMethod(this.data.valid.email, this.data.valid.password);
    loginPage.loginBtn.click();

    //VERIFY ADMIN ROLE AND TITLE
    dashboardPage.fullName.should("have.text", "Mara  B");
    dashboardPage.roleLabel.should("have.text", "role: user");
    dashboardPage.title.should("eq", "User: Profile | Delek Homes");
  });
});
