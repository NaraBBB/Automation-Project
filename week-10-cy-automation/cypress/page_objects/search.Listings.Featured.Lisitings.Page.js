import { CommonPage } from "./common.page.js";

class FeaturedListingsPage extends CommonPage {
  get moreInfoBtn() {
    return cy.contains("More Info");
  }
  get titleInp() {
    return cy.get('[name="title"]');
  }
  get propertyTitle() {
    return cy.contains("Beautiful House");
  }
  get listedPropt() {
    return cy.get(
      '[class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb"]'
    );
  }
  get propertyPrc() {
    return cy.get('[class="MuiBox-root css-dc9kff"]');
  }
  get postSuccessMsg() {
    return cy.contains("Post success!");
  }
  }
export default new FeaturedListingsPage();
