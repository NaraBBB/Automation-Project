import homePage from "../../page_objects/homePage";
import listingPage from "../../page_objects/listingPage";

describe("Testing Home page", () => {
  let verificationTexts;

  before(function () {
    // Load verification texts into a global variable
    cy.fixture("verificationTexts.json").then((data) => {
      verificationTexts = data;
    });
  });

  beforeEach(function () {
    // Use baseUrl from the JSON file
    cy.visit(verificationTexts.baseUrl);
    cy.errorHandler();
    homePage.nigthMde.click();
  });

  it("Should search by keyword", () => {
    // Use searchPlaceholder and searchResult from the JSON file
    homePage.searchInp.type("new window", { force: true });
    homePage.startSearchBtn.click();
    listingPage.listedPropt.should("contain.text", verificationTexts.validationHP.searchResult);
  });

  it("Should search by bedrooms", () => {
    // Use selector and expected text from JSON for validation
    homePage.bedroomsDrpdn.click();
    homePage.bedrooms2PlusOpt.click();
    homePage.startSearchBtn.click();
  listingPage.selectedBedroomsVal.should("contain.text", verificationTexts.validationHP.selectedBedrooms);
  });

  it("Should search by price", () => {
    // Combine baseUrl with featuredListings path
    cy.visit(verificationTexts.validationHP.featuredListingsPriceUrls);
    listingPage.propertyPrc
      .contains(verificationTexts.validationHP.propertyPrice)
      .should("be.visible");
  });

  it("Should search by city", () => {
    // Search by city and validate listing details dynamically
    homePage.cityInp.type("Elgin").click();
    homePage.startSearchBtn.click();
    listingPage.moreInfoBtn.click();

    const expectedDetails = verificationTexts.validationHP.propertyDetails;

    listingPage.listingDtls.within(() => {
      // Loop through each key-value pair from propertyDetails
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});
