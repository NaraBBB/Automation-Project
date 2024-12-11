import homePage from "../../page_objects/homePage";
import listingPage from "../../page_objects/listingPage";
describe("Testing Listing page", () => {
  beforeEach(function () {
    cy.visit("/featured-listings");
    listingPage.nigthMde.click();
  });

  it("Should search by keyword", () => {
    listingPage.searchListInp.type("wood grain");
    listingPage.startSearchBtn.click();
    listingPage.listedPropt
      .contains(" Single-family home")
      .should("be.visible");
  });
  it("Should search by bedrooms", () => {
    listingPage.bedroomsDrpdn.click();
    listingPage.bedrooms3PlusOpt.click();
    listingPage.startSearchBtn.click();
    listingPage.selectedBedroomsVal.invoke("text").should("contains", "3");
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=500000-10000000&city=Niles");
    listingPage.propertyPrc.contains("$ 7,100,000").should("be.visible");
  });

  it("Should search by city", () => {
    listingPage.cityInp.type("Niles").click();
    listingPage.startSearchBtn.click();
    listingPage.moreInfoBtn.click();
    listingPage.listingDet.within(() => {
      cy.contains(" Single-family home").should("be.visible");
      cy.contains("311 W Niles rd").should("be.visible");
      cy.contains(" Asking Price: $ 7,100,000").should("be.visible");
      cy.contains("Square Feet: 924").should("be.visible");
      cy.contains("Lot Size: 9200").should("be.visible");
      cy.contains("Garage: 1").should("be.visible");
      cy.contains("Bathrooms: 2").should("be.visible");
      cy.contains("Bedrooms: 3").should("be.visible");
      cy.contains("Realtor: Narachan B").should("be.visible");
      cy.contains("Great curb appeal with dark board and batten facade highlighted by stone and wood grain accents and modern front entry door.").should("be.visible");
    });
  });
});
