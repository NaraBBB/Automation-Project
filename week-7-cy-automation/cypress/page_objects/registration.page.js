class RegistrationPage{
    
    get regstFirstNameInp() {return cy.get('[name="firstName"]')}
    get regstLastNameInp() {return cy.get('[name="lastName"]') }
    get regstEmailInp() {return cy.get('[name="email"]')}
    get regstPasswordInp() {return cy.get('[name="password"]')}
    get regstBtn() {return cy.get('[type="submit"]')}

    regstMethod(firstName, lastName, email, password) {
      this.regstFirstNameInp.type(firstName);
      this.regstLastNameInp.type(lastName);
      this.regstEmailInp.type(email); 
      this.regstPasswordInp.type(password); 
      }
    }
      export default new RegistrationPage();