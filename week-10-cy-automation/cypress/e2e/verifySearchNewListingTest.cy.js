import homePage from "../page_objects/homePage";
import featuredListingsPage from "../page_objects/featuredListingsPage";

describe("Testing Home page search functionality ", () => {
  let validationMessages;
  
  beforeEach(function () {
    cy.visit("/");
    cy.errorHandler();
    cy.fixture("validationMessages.json").then((data) => {
      validationMessages = data;
    });
  });

  it("Should search by keyword", () => {
    homePage.searchInp.type("Spacious apartment", { force: true });
    homePage.startSearchBtn.click();
    featuredListingsPage.listedPropt.should(
      "contain.text",
      validationMessages.propertyDetails.searchResult
    );
  });
  it("Should search by bedrooms", () => {
    homePage.bedroomsDrpdn.click();
    homePage.bedroomsOpt.click();
    homePage.startSearchBtn.click();
    featuredListingsPage.selectedBedroomsVal.should(
      "contain.text",
      validationMessages.propertyDetails.selectedBedrooms
    );
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=500000-10000000&city=New+York");
    featuredListingsPage.propertyPrc.should(
      "contain.text",
      validationMessages.propertyDetails.propertyPrice
    );
  });

  it("Should search by city", () => {
    homePage.cityInp.type("New York").click();
    homePage.startSearchBtn.click();
    featuredListingsPage.moreInfoBtn.click();

    const expectedDetails = validationMessages.propertyDetails;
    featuredListingsPage.listingDtls.within(() => {
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});
