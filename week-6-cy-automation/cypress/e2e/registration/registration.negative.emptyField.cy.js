import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration Tests", () => {
    it("Should not register without filling in required fields", () => {
      cy.visit("/register");
      cy.get('[href="/auth/register"]').click();

      cy.get('[name="firstName"]')
      cy.get('[name="lastName"]');
      cy.get('[name="email"]');
      cy.get('[name="password"]');
      cy.get('[type="submit"]').click();
       
  cy.xpath("//p[text()='First name required']").should('have.text','First name required');
  cy.xpath("//p[text()='Last name required']").should('have.text','Last name required');
  cy.xpath("//p[text()='Email is required']").should('have.text','Email is required');
  cy.xpath("//p[text()='Password is required']").should('have.text','Password is required')
  

    });
});

