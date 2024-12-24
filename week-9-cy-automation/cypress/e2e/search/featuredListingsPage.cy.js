import featuredListingsPage from "../../page_objects/featuredListingsPage";

describe("Testing Listing page", () => {
  let verificationTexts;

  before(function () {
    cy.fixture("verificationTexts.json").then((data) => {
      verificationTexts = data;
    });
  });

  beforeEach(function () {
    cy.visit(
      `${verificationTexts.baseUrl}${verificationTexts.featuredListUrl}`
    );
    cy.errorHandler();
  });

  it("Should search by keyword", () => {
    featuredListingsPage.searchListInp.type("wood grain", { force: true });
    featuredListingsPage.startSearchBtn.click();
    featuredListingsPage.listedPropt.should(
      "contain.text",
      verificationTexts.validationLP.searchResult
    );
  });

  it("Should search by bedrooms", () => {
    featuredListingsPage.bedroomsDrpdn.click();
    featuredListingsPage.bedroomsOpt.click();
    featuredListingsPage.startSearchBtn.click();
    featuredListingsPage.selectedBedroomsVal.should(
      "contain.text",
      verificationTexts.validationLP.selectedBedrooms
    );
  });

  it("Should search by price", () => {
    cy.visit(verificationTexts.validationLP.featuredListingsPriceUrl);
    featuredListingsPage.propertyPrc
      .contains(verificationTexts.validationLP.propertyPrice)
      .should("be.visible");
  });

  it("Should search by city", () => {
    featuredListingsPage.cityInp.type("Niles", { force: true });
    featuredListingsPage.startSearchBtn.click();
    featuredListingsPage.moreInfoBtn.click();

    const expectedDetails = verificationTexts.validationLP.propertyDetails;
    featuredListingsPage.listingDtls.within(() => {
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});
