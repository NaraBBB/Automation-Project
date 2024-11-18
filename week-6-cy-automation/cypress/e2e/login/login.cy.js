describe("Login Tests", () => {
  it("Should successfully login with valid credentials", () => {
    cy.viewport(1366, 768);
    cy.visit("/login"); 
    cy.xpath('//a[@href="/auth/login"]').click();
    cy.get;
    cy.xpath('//input[@name="email"]').type("waped44366@gianes.com");
    cy.xpath('//input[@type="password"]').type("DontTestMe");
    cy.get('[type="submit"]').click();
    cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
    cy.title().then((actualTitle) => {
      console.log("Actual Page Title:", actualTitle);
    });
  });
});
