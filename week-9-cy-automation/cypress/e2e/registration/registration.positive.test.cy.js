import { faker } from "@faker-js/faker";
import homePage from "../../page_objects/homePage";
import registrationPage from "../../page_objects/registrationPage";
import dashboardPage from "../../page_objects/dashboardPage";
import loginPage from "../../page_objects/loginPage";

const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe("Registration Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should successfully register a new user", function () {
    homePage.homePageRegisterBtn.click();
    registrationPage.registerNewUser(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
    cy.url().should("include", "dashboard/user/profile");
    dashboardPage.userProfileMenu.click();
    dashboardPage.firstNameInp.should("have.value", userData.firstName);
    dashboardPage.lastNameInp.should("have.value", userData.lastName);
    dashboardPage.emailInp.should("have.value", userData.email);
  });

  it("Should successfully register a new user and login after registration", function () {
    homePage.homePageLoginBtn.click();
    loginPage.loginMethod(userData.email, userData.password);
    cy.url().should("include", "dashboard/user/profile");
  });
});
