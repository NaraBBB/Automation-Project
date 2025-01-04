class FeaturedListingsPage {

  get darkTheme() {
    return cy.get('[type="checkbox"]');
  }
    get searchListInp() {
      return cy.get('input[type="text"]').first();
    }
    get startSearchBtn() {
      return cy.xpath("//button[normalize-space()='Start Search']");
    }
    get listedPropt() {
      return cy.get(
        '[class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb"]');
    }
    get bedroomsDrpdn() {
      return cy.get("div[id=':r2:']");
    }
    get bedroomsOpt() {
      return cy.get('li[data-value="3"]');
    }
  get selectedBedroomsVal() {
    return cy.xpath("//div[text()=' Bedrooms: ']")
  }
  get cityInp() {
    return cy.get('input[type="text"]').last();
  }
    get moreInfoBtn() {
      return cy.contains("More Info");
    }
    get propertyPrc() {
      return cy.get(".MuiPaper-rounded div:contains($)");
    }
    get listingDtls() {
      return cy.get('[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 MuiGrid-grid-sm-12 MuiGrid-grid-md-8"]').first();
    }
  }
  export default new FeaturedListingsPage();
