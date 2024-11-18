describe("Registration Tests", () => {
  it("Should not register with an already existing email account", () => {
    cy.visit("/register");
    cy.get('[href="/auth/register"]').click();

    cy.get('[name="firstName"]').type("Sara");
    cy.get('[name="lastName"]').type("B");
    cy.xpath('//input[@name="email"]').type("waped44366@gianes.com");
    cy.xpath('//input[@type="password"]').type("DontTestMe");
    cy.get('[type="submit"]').click();
    cy.xpath("//div[text()='Input data validation failed']").should(
      "be.visible"
    );

    cy.url().should("include", "/auth/register");
  });
});
