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
  it("Should successfully register a new user and logout after registration", function() {
    homePage.regsPageBtn.click();

    registrationPage.regstMethod(
      this.data.valid.firstName, 
      this.data.valid.lastName,  
      email,                     
      password);
    registrationPage.regstBtn.click();

    dashboardPage.userIconMenu.click();
    dashboardPage.logoutBtn.click();
   });

   it("Should successfully login with registered credentials", function () {
    homePage.loginPageBtn.click()
   
    loginPage.loginMethod(email, password);
    loginPage.loginBtn.click();
    dashboardPage.hamburgerMenuBtn.click();

    dashboardPage.fullName.should("have.text", "Sara  Ba");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");
  });
});
