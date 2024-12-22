
Cypress.Commands.add('log_in', (email = "nipifof819@datingel.com", password = "DontTestMe") => { 
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password ,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
})
import 'cypress-file-upload';
