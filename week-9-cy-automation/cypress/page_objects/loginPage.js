class LoginPage {
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get passwordInput() {
    return cy.get('[name="password"]');
  }
  get loginBtn() {
    return cy.get('[type="submit"]');
  }
  loginMethod(email, password) {
    if (email) {
      this.emailInput.type(email);
    }
    
    if (password) { // Skip typing if password is null or undefined
      this.passwordInput.type(password);
    }
  
    this.loginBtn.click();
  }
  
}
export default new LoginPage();
