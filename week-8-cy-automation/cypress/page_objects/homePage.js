class HomePage {
  get darkTheme() {
    return cy.get('[type="checkbox"]');
  }
  get searchInp() {
    return cy.get('input[type="text"]').first();
  }
  get startSearchBtn() {
    return cy.contains("Start Search");
  }
  get bedroomsDrpdn() {
    return cy.get("div[id=':r2:']");
  }
  get cityInp() {
    return cy.get('input[type="text"]').last();
  }
}
export default new HomePage();
