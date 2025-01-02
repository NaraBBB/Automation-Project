import './commands'

import 'cypress-xpath'   

import 'cypress-file-upload';

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });