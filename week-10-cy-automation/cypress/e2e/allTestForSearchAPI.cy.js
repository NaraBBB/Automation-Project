import HomePage from "../page_objects/search.Listings.Home.Page";
import FeaturedListingsPage from "../page_objects/search.Listings.Featured.Lisitings.Page";
import listingDetails from "../fixtures/listingDetails.json";

let listingId;

describe("End-to-End: Create, Search, and Delete a Listing via API", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  before(function () {
    cy.createListing(listingDetails).then((data) => {
      listingId = data;
    });
  });

  it("Should search by keyword", function () {
    HomePage.searchInp.type(listingDetails.newRealEstateAPI.title);
    HomePage.startSearchBtn.click();
    FeaturedListingsPage.propertyTitle.should(
      "have.text",
      listingDetails.newRealEstateAPI.title
    );
  });

  it("Should search by bedrooms", function () {
    HomePage.bedroomsDrpdn.click();
    HomePage.bedroomsOpt.click();
    HomePage.startSearchBtn.click();
    FeaturedListingsPage.getSelectedBedroomsVal.should("be.at.least", 3);
  });

  it("Should search by city", function () {
    HomePage.cityInp.type(listingDetails.newRealEstateAPI.city);
    HomePage.startSearchBtn.click();
    FeaturedListingsPage.cityInp.should("be.visible", listingDetails.city);
  });

  after("Deleting listing after creatation", () => {
    cy.deleteListing(listingId);
  });
});
