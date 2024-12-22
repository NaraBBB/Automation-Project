import listingPage from "../../page_objects/listingPage";

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
    listingPage.nigthMde.click();
  });

  it("Should search by keyword", () => {
    listingPage.searchListInp.type("wood grain", { force: true });
    listingPage.startSearchBtn.click();
    listingPage.listedPropt.should(
      "contain.text",
      verificationTexts.validationLP.searchResult
    );
  });

  it("Should search by bedrooms", () => {
    listingPage.bedroomsDrpdn.click();
    listingPage.bedrooms3PlusOpt.click();
    listingPage.startSearchBtn.click();
    listingPage.selectedBedroomsVal.should(
      "contain.text",
      verificationTexts.validationLP.selectedBedrooms
    );
  });

  it("Should search by price", () => {
    cy.visit(verificationTexts.validationLP.featuredListingsPriceUrl);
    listingPage.propertyPrc
      .contains(verificationTexts.validationLP.propertyPrice)
      .should("be.visible");
  });

  it("Should search by city", () => {
    listingPage.cityInp.type("Niles").click();
    listingPage.startSearchBtn.click();
    listingPage.moreInfoBtn.click();

    const expectedDetails = verificationTexts.validationLP.propertyDetails;

    listingPage.listingDtls.within(() => {
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});
