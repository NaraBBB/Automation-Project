import { faker } from "@faker-js/faker";
import registrationPage from "../../page_objects/registrationPage";
const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration Tests", () => {
  
  it("Should successfully register a new user", () => {
    cy.visit("auth/register");
    registrationPage.fName.type("Sara");
    registrationPage.lName.type("Ba");
    registrationPage.email.type(email);
    registrationPage.pword.type(password);
    registrationPage.registrationBtn.click();
    cy.url().should("include", "dashboard/user/profile");
  });
});
