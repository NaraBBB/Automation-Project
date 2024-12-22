class RegistrationPage {
  
  get regstFirstNameInp() {
    return cy.get('[name="firstName"]');
  }
  get regstLastNameInp() {
    return cy.get('[name="lastName"]');
  }
  get regstEmailInp() {
    return cy.get('[name="email"]');
  }
  get regstPasswordInp() {
    return cy.get('[name="password"]');
  }
  get regstBtn() {
    return cy.get('[type="submit"]');
  }
  get registerBtn() {
    return cy.get('[type="submit"]');
  }

  registerMethod(firstName, lastName, email, password) {
    this.regstFirstNameInp.type(firstName);
    this.regstLastNameInp.type(lastName);
    this.regstEmailInp.type(email);
    this.regstPasswordInp.type(password);
  }
  negativeRegister(user) {
    this.registerMethod(
      user.firstName,
      user.lastName,
      user.email,
      user.password
    );
    this.registerBtn.click();
  }
  registerUser(data, email, password) {
    this.registerMethod(
      data.valid.firstName,
      data.valid.lastName,
      email,
      password
    );
    this.registerBtn.click();
  }
}
export default new RegistrationPage();
