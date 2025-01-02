import featuredListingsPage from "../../page_objects/featuredListingsPage";

describe("Testing Listing page", () => {
  let validateListings;

  before(function () {
    cy.fixture("listingDetails.json").then((data) => {
      validateListings = data;
    });
  });

  beforeEach(function () {
    cy.visit("/featured-listings");
    cy.errorHandler();
    featuredListingsPage.darkTheme.click();
  });

  it("Should search by keyword", () => {
    featuredListingsPage.searchListInp.type("wood grain", { force: true });
    featuredListingsPage.startSearchBtn.click();
    featuredListingsPage.listedPropt.should(
      "contain.text",
      validateListings.listingPageListingDetails.searchResult
    );
  });

  it("Should search by bedrooms", () => {
    featuredListingsPage.bedroomsDrpdn.click();
    featuredListingsPage.bedroomsOpt.click();
    featuredListingsPage.startSearchBtn.click();
    featuredListingsPage.selectedBedroomsVal.should(
      "contain.text",
      validateListings.listingPageListingDetails.selectedBedrooms
    );
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=500000-10000000&city=Niles");
    featuredListingsPage.propertyPrc
      .contains(validateListings.listingPageListingDetails.propertyPrice)
      .should("be.visible");
  });

  it("Should search by city", () => {
    featuredListingsPage.cityInp.type("Niles", { force: true });
    featuredListingsPage.startSearchBtn.click();
    featuredListingsPage.moreInfoBtn.click();
    const expectedDetails = validateListings.listingPageListingDetails;
    featuredListingsPage.listingDtls.within(() => {
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});
