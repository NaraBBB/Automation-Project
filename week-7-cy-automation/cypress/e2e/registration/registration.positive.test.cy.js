import { faker } from "@faker-js/faker";
import mainPage from "../../page_objects/main.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
import loginPage from "../../page_objects/login.page";
const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration Tests", () => {
   beforeEach(() => {
     cy.visit("/");
     cy.fixture("example").as("data");
   });
 
   it("Should successfully register a new user", function () {
    mainPage.mainPageRegisterBtn.click();
    registrationPage.registerUser(this.data, email,password );
    cy.url().should("include", "dashboard/user/profile")
   });

   it("Should successfully logout after registration", function () {
    const email = faker.internet.email();
    const password = faker.string.uuid();
    mainPage.mainPageRegisterBtn.click();
     registrationPage.registerUser(this.data, email, password);
 
     dashboardPage.userIconMenu.click();
     dashboardPage.logoutBtn.click()
     
     cy.url().should("include", "/login");
   });
 
   it("Should successfully register a new user and login after registration", function () {
     mainPage.mainPageLoginBtn.click();
     loginPage.loginMethod(email, password);
  
     dashboardPage.hamburgerMenuBtn.click();
     dashboardPage.fullName.should("have.text", "Sara  Ba");
       
  });
});
