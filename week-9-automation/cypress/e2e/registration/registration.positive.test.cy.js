import { faker } from "@faker-js/faker";
import homePage from "../../page_objects/homePage";
import registrationPage from "../../page_objects/registrationPage";
import dashboardPage from "../../page_objects/dashboardPage";
import loginPage from "../../page_objects/loginPage";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("data.json").as("userData");
  });

  it.only("Should successfully register a new user", function () {
 homePage.homePageRegisterBtn.click();
 registrationPage.registerUser(userData.valid, email, password);
    cy.url().should("include", "dashboard/user/profile");
  });

  it("Should successfully logout after registration", function () {
    const email = faker.internet.email();
    const password = faker.string.uuid();
    homePage.homePageRegisterBtn.click();
    registrationPage.registerUser(this.data, email, password);

    dashboardPage.userIconMenu.click();
    dashboardPage.logoutBtn.click();

    cy.url().should("include", "/login");
  });
  it("Should successfully register a new user and login after registration", function () {
    loginPage.loginMethod(email, password)
  dashboardPage.hamburgerMenuBtn.click();
 dashboardPage.fullName.should("have.text", "Sara  Ba");
 dashboardPage.fullName.should("have.text", "Mara  B");
  });
});
