class HomePage {
  get nigthMde() {
    return cy.get('[type="checkbox"]');
  }
  get searchInp() {
    return cy.get('input[type="text"]').first();
  }
  get startSearchBtn() {
    return cy.xpath("//button[normalize-space()='Start Search']");
  }
  get bedroomsDrpdn() {
    return cy.get("div[id=':r2:']");
  }
  get bedrooms2PlusOpt() {
    return cy.get('[data-value="2"]');
  }
  get selectedBedroomsVal() {
    return cy.contains("div", "Berooms:").siblings();
  }
  get cityInp() {
    return cy.get('input[type="text"]').last();
  }
}
export default new HomePage();
