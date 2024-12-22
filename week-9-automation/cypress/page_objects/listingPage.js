class ListingPage {
  get nigthMde() {
    return cy.get('[type="checkbox"]');
  }
  get searchListInp() {
    return cy.get('input[type="text"]').first();
  }
  get startSearchBtn() {
    return cy.xpath("//button[normalize-space()='Start Search']");
  }
  get listedPropt() {
    return cy.get('[class="MuiTypography-root MuiTypography-h5 css-ijss57"]');
  }
  get bedroomsDrpdn() {
    return cy.get("div[id=':r2:']");
  }
  get bedrooms3PlusOpt() {
    return cy.get('li[data-value="3"]');
  }
  get selectedBedroomsVal() {
    return cy.xpath("//div[text()=' Bedrooms: ']");
  }
  get cityInp() {
    return cy.get('input[type="text"]').last();
  }
  get moreInfoBtn() {
    return cy.contains("More Info");
  }
  get propertyPrc() {
    return cy.get(".MuiBox-root.css-6yrxxf");
  }
  get listingDtls() {
    return cy
      .get(
        '[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 MuiGrid-grid-sm-12 MuiGrid-grid-md-8"]'
      )
      .first();
  }
}
export default new ListingPage();
