class HomePage {
  get homePageLoginBtn() {
    return cy.get('[href="/auth/login"]');
  }
  get homePageRegisterBtn() {
    return cy.get('[href="/auth/register"]');
  }
}
export default new HomePage();
