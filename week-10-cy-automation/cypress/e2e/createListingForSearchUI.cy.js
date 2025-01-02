import newRealestatePage from "../page_objects/newRealestatePage";
import FeaturedListingsPage from "../page_objects/search.Listings.Featured.Lisitings.Page";
import HomePage from "../page_objects/search.Listings.Home.Page";
import userCredentials from "../fixtures/userCredentials.json";

let listingId;

describe("Create a New Listing via UI", () => {
  afterEach("Deleting listing after creatation", () => {
    cy.url().then((url) => {
      const listingId = url.split("/").pop();
      cy.deleteListing(listingId);
    });
  });

  beforeEach(() => {
    cy.log_in(userCredentials.username, userCredentials.password);
    cy.fixture("listingDetails.json").as("listingDetailsData");
  });

  it("Should allow a user to create a new real estate listing", function () {
    const listingDetails = this.listingDetailsData.newRealEstateUI;
    cy.visit("/dashboard/real-estate/new");

    newRealestatePage.createNewRealEstate(
      listingDetails.title,
      listingDetails.description,
      listingDetails.city,
      listingDetails.address,
      listingDetails.zipCode,
      listingDetails.imagePath,
      listingDetails.price,
      listingDetails.bedrooms,
      listingDetails.bathrooms,
      listingDetails.garage,
      listingDetails.squareFeet,
      listingDetails.lotSize
    );
    cy.url().then((url) => {
      listingId = url.split("/").pop();
    });
    FeaturedListingsPage.postSuccessMsg.should("be.visible");
    cy.title().should("eq", "Estate Objects | Delek Homes");

    cy.visit("/");
    HomePage.searchInp.type(listingDetails.title);
    HomePage.startSearchBtn.click();
    FeaturedListingsPage.moreInfoBtn.click();

    cy.url().then((url) => {
      listingId = url.split("/").pop();
    });

    listingDetails.listingInfo.forEach((text) => {
      FeaturedListingsPage.listingDtls.contains(text).should("be.visible");
    });
  });
});
