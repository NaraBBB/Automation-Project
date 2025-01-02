import { CommonPage } from "./common.page";

class HomePage extends CommonPage {

  get homePageLoginBtn() {
    return cy.get('[href="/auth/login"]');
  }
  get homePageRegisterBtn() {
    return cy.get('[href="/auth/register"]');
  }

  
}
export default new HomePage();
