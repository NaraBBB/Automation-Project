import homePage from "../../page_objects/homePage";
import featuredListingsPage from "../../page_objects/featuredListingsPage";

describe("Testing Home page", () => {
  let verificationTexts;

  before(function () {
    cy.fixture("verificationTexts.json").then((data) => {
      verificationTexts = data;
    });
  });

  beforeEach(function () {
    cy.visit(verificationTexts.baseUrl);
    cy.errorHandler();
  });

  it("Should search by keyword", () => {
    homePage.searchInp.type("new window", { force: true });
    homePage.startSearchBtn.click();
    featuredListingsPage.listedPropt.should(
      "contain.text",
      verificationTexts.validationHP.searchResult
    );
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsDrpdn.click();
    homePage.bedroomsOpt.click();
    homePage.startSearchBtn.click();
    featuredListingsPage.selectedBedroomsVal.should(
      "contain.text",
      verificationTexts.validationHP.selectedBedrooms
    );
  });

  it("Should search by price", () => {
    cy.visit(verificationTexts.validationHP.featuredListingsPriceUrl);
    featuredListingsPage.propertyPrc
      .contains(verificationTexts.validationHP.propertyPrice)
      .should("be.visible");
  });

  it("Should search by city", () => {
    homePage.cityInp.type("Elgin").click();
    homePage.startSearchBtn.click();
    featuredListingsPage.moreInfoBtn.click();

    const expectedDetails = verificationTexts.validationHP.propertyDetails;
    featuredListingsPage.listingDtls.within(() => {
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});
