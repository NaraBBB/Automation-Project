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
    return cy.get('[class="MuiTypography-root MuiTypography-h5 css-ijss57"]');
  }
  get bedroomsDrpdn() {
    return cy.get('[id=":r2:"]');
  }
  get selectedBedroomsVal() {
    return cy.get('[viewBox="0 0 2048 1280"]');
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
  get listingDet() {
    return cy
      .get(
        '[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 MuiGrid-grid-sm-12 MuiGrid-grid-md-8"]'
      )
      .first();
  }
}
export default new FeaturedListingsPage();
