
Cypress.Commands.add('login', (username, password)=> {
    cy.visit('/login');
    cy.xpath('//a[@href="/auth/login"]').click();
    cy.get;
    cy.xpath('//input[@name="email"]').type("waped44366@gianes.com");
    cy.xpath('//input[@type="password"]').type("DontTestMe");
    cy.get('[type="submit"]').click();
});