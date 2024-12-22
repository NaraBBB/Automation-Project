import homePage from "../../page_objects/homePage";
import listingPage from "../../page_objects/listingPage";

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
    homePage.nigthMde.click();
  });

  it("Should search by keyword", () => {
    homePage.searchInp.type("new window", { force: true });
    homePage.startSearchBtn.click();
    listingPage.listedPropt.should(
      "contain.text",
      verificationTexts.validationHP.searchResult
    );
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsDrpdn.click();
    homePage.bedrooms2PlusOpt.click();
    homePage.startSearchBtn.click();
    listingPage.selectedBedroomsVal.should(
      "contain.text",
      verificationTexts.validationHP.selectedBedrooms
    );
  });

  it("Should search by price", () => {
    cy.visit(verificationTexts.validationHP.featuredListingsPriceUrl);
    listingPage.propertyPrc
      .contains(verificationTexts.validationHP.propertyPrice)
      .should("be.visible");
  });

  it("Should search by city", () => {
    homePage.cityInp.type("Elgin").click();
    homePage.startSearchBtn.click();
    listingPage.moreInfoBtn.click();

    const expectedDetails = verificationTexts.validationHP.propertyDetails;
    listingPage.listingDtls.within(() => {
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});
