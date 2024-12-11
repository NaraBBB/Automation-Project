class MainPage {
  get mainPageLoginBtn() {
    return cy.get('[href="/auth/login"]');
  }
  get mainPageRegisterBtn() {
    return cy.get('[href="/auth/register"]');
  }
}
export default new MainPage();
