describe("Login Tests", () => {
  it("Should successfully login and logout with valid credentials", () => {
    cy.viewport(1366, 768);
    cy.visit("/login"); 
    cy.xpath('//a[@href="/auth/login"]').click();
    cy.xpath('//input[@name="email"]').type("waped44366@gianes.com");
    cy.xpath('//input[@type="password"]').type("DontTestMe");
    cy.get('[type="submit"]').click();

    cy.get("h6").should("have.text", "Mara  B");
    cy.get("a p").should("have.text", "role: user");

    cy.xpath("//button[contains(@class,'css-w5qhhs')]").click();
    cy.xpath("//li[text() = 'Logout']").click()
  
  });
});
