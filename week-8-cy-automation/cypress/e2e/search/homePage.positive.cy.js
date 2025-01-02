import homePage from "../../page_objects/homePage";
import featuredListingsPage from "../../page_objects/FeaturedListingsPage";

describe("Testing Home page", () => {
  beforeEach(function () {
    cy.visit("/");
    homePage.nigthMde.click();
  });

  it("Should search by keyword", () => {
    homePage.searchInp.type("new windows");
    homePage.startSearchBtn.click();
    listingPage.listedPropt.should(
      "be.visible",
      "Brand new single-family residence"
    );
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsDrpdn.click();
    homePage.bedrooms2PlusOpt.click();
    homePage.startSearchBtn.click();
    listingPage.selectedBedroomsVal.should("contain.text", "3");
  });

  it("Search Search by price", () => {
    cy.visit("/featured-listings?price=500000-10000000&city=Elgin");
    listingPage.propertyPrc.contains("$ 3,330,000").should("be.visible");
  });

  it("Should search by city", () => {
    homePage.cityInp.type("Elgin").click();
    homePage.startSearchBtn.click();
    listingPage.moreInfoBtn.click();
    listingPage.listingDet.within(() => {
      cy.contains("Brand new single-family residence ").should("be.visible");
      cy.contains("310 W Elgin rd").should("be.visible");
      cy.contains(" Asking Price: $ 3,330,000").should("be.visible");
      cy.contains("Square Feet: 924").should("be.visible");
      cy.contains("Lot Size: 500").should("be.visible");
      cy.contains("Garage: 2").should("be.visible");
      cy.contains("Bathrooms: 2").should("be.visible");
      cy.contains("Bedrooms: 5").should("be.visible");
      cy.contains("Realtor: Narachan B").should("be.visible");
      cy.contains(
        "Sunny and spacious 5 bed, 2 bath home in the very desirable Galewood."
      ).should("be.visible");
    });
  });
});
