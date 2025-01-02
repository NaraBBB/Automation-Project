import homePage from "../../page_objects/homePage";
import featuredListingsPage from "../../page_objects/featuredListingsPage";

describe("Testing Home page", () => {
  let validateListings;

  before(function () {
    cy.fixture("listingDetails.json").then((data) => {
      validateListings = data;
    });
  });

  beforeEach(function () {
    cy.visit("/");
    cy.errorHandler();
    homePage.darkTheme.click();
  });

  it("Should search by keyword", () => {
    homePage.searchInp.type("new window", { force: true });
    homePage.startSearchBtn.click();
    featuredListingsPage.listedPropt.should(
      "contain.text",
      validateListings.homePageListingDetails.searchResult
    );
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsDrpdn.click();
    homePage.bedroomsOpt.click();
    homePage.startSearchBtn.click();
    featuredListingsPage.selectedBedroomsVal.should(
      "contain.text",
      validateListings.homePageListingDetails.selectedBedrooms
    );
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=500000-10000000&city=Elgin");
    featuredListingsPage.propertyPrc
      .contains(validateListings.homePageListingDetails.propertyPrice)
      .should("be.visible");
  });

  it("Should search by city", () => {
    homePage.cityInp.type("Elgin").click();
    homePage.startSearchBtn.click();
    featuredListingsPage.moreInfoBtn.click();

    const expectedDetails = validateListings.homePageListingDetails;
    featuredListingsPage.listingDtls.within(() => {
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});
