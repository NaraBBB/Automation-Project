import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const password = faker.string.uuid();

describe("Registration Tests", () => {
  it("Should successfully register a new user", () => {
    cy.visit("/register");
    cy.get('[href="/auth/register"]').click();

    cy.get('[name="firstName"]').type("Sara");
    cy.get('[name="lastName"]').type("Ba");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.xpath("//button[contains(@class,'css-1xk5apd')]").click();
    cy.get("h6").should("have.text", "Sara  Ba");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.url().should("include", "dashboard/user/profile");
  });
});
