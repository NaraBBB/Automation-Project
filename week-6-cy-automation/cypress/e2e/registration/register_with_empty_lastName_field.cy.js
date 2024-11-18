import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration Tests", () => {
    it("Should not register without filling in required fields", () => {
      cy.visit("/register");
      cy.get('[href="/auth/register"]').click();
  
      cy.get('[name="firstName"]').type("Sara");
      cy.get('[name="lastName"]').type();
      cy.get('[name="email"]').type(email);
      cy.get('[name="password"]').type(password);
      cy.get('[type="submit"]').click();
    });
});