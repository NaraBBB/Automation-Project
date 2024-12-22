// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a login command --
Cypress.Commands.add('log_in', (email = "waped44366@gianes.com", password = "DontTestMe") => { 
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password ,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });

})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 //This is error handle command
 Cypress.Commands.add('errorHandler', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
