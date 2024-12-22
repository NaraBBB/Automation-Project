import homePage from "../../page_objects/homePage";
import registrationPage from "../../page_objects/registrationPage";
import dashboardPage from "../../page_objects/dashboardPage";
import { faker } from "@faker-js/faker";
const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe("User Registration and Logout Functionality", () => {
beforeEach(() => {
    cy.visit("/");
  });

  it("Should successfully logout after registration", function () {
    homePage.homePageRegisterBtn.click();
    registrationPage.registerNewUser(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
    dashboardPage.userIconMenu.click();
    dashboardPage.logoutBtn.click();
    cy.url().should("include", "/login");
  });
});
