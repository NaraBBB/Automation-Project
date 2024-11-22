describe("Login and Logout Tests", () => {
  beforeEach(function() {
    cy.viewport(1366, 768);
    cy.visit("/login"); 
  });

  it("Should successfully login with valid credentials", () => {
    cy.xpath('//a[@href="/auth/login"]').click();
    cy.xpath('//input[@name="email"]').type("waped44366@gianes.com");
    cy.xpath('//input[@type="password"]').type("DontTestMe");
    cy.get('[type="submit"]').click();

    cy.get("h6").should("have.text", "Mara  B");
    cy.get("a p").should("have.text", "role: user");
  });

  it("Should successfully logout", () => {
    cy.xpath('//a[@href="/auth/login"]').click();
    cy.xpath('//input[@name="email"]').type("waped44366@gianes.com");
    cy.xpath('//input[@type="password"]').type("DontTestMe");
    cy.get('[type="submit"]').click();
    cy.get("h6").should("have.text", "Mara  B");
    cy.get("a p").should("have.text", "role: user");
    
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.xpath("//li[text() = 'Logout']").click();
  });
});
