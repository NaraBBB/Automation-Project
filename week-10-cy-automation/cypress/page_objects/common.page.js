class CommonPage {
  get darkTheme() {
    return cy.get('[type="checkbox"]');
  }
  get title() {
    return cy.title();
  }
  get searchInp() {
    return cy.get('input[type="text"]').first();
  }
  get cityInp() {
    return cy.get('input[type="text"]').last();
  }
  get startSearchBtn() {
    return cy.contains("Start Search");
  }
  get bedroomsDrpdn() {
    return cy.get("div[id=':r2:']");
  }
  get bedroomsOpt() {
    return cy.get('[data-value="2"]');
  }
  get getSelectedBedroomsVal() {
    return cy
      .get(".MuiGrid-root")
      .contains("Bedrooms:")
      .invoke("text")
      .then((text) => parseInt(text.replace(/\D/g, ""), 10));
  }
  get listingDtls() {
    return cy
      .get(
        '[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 MuiGrid-grid-sm-12 MuiGrid-grid-md-8"]'
      )
      .first();
  }
}
export { CommonPage };
