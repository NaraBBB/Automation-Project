import { faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";

const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration Tests", () => {
  beforeEach(() => {
    cy.visit("/register");
    cy.fixture("example").as("data");
  });

  const registerUser = function (data) {
    homePage.regsPageBtn.click();
    registrationPage.regstMethod(
      data.valid.firstName,
      data.valid.lastName,
      email,
      password
    );
    registrationPage.regstBtn.click();
  };

  it("Should successfully register a new user", function () {
    registerUser(this.data);
  });

  it("Should successfully logout after registration", function () {
    registerUser(this.data);
    
    dashboardPage.userIconMenu.click();
    dashboardPage.logoutBtn.click();
    
    cy.url().should("include", "/login");
  });

  it("Should successfully register a new user and log after registration", function () {
    homePage.loginPageBtn.click()
   
    loginPage.loginMethod(email, password);
    loginPage.loginBtn.click();
    dashboardPage.hamburgerMenuBtn.click();

    dashboardPage.fullName.should("have.text", "Sara  Ba");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");
  });
});
