import featuredListingsPage from "../../page_objects/featuredListingsPage";

describe("Testing Listing page", () => {
  beforeEach(function () {
    cy.visit("/featured-listings");
    featuredListingsPage.darkTheme.click();
  });

  it("Should search by keyword", () => {
    featuredListingsPage.searchListInp.type("wood grain", { force: true });
    featuredListingsPage.startSearchBtn.click();
    featuredListingsPage.listedPropt
      .contains(" Single-family home")
      .should("be.visible");
  });

  it("Should search by bedrooms", () => {
    featuredListingsPage.bedroomsDrpdn.type("3+{enter}");
    featuredListingsPage.startSearchBtn.click();
    featuredListingsPage.selectedBedroomsVal.parent().each((bedroom) => {
      cy.wrap(bedroom)
        .should("have.not.text", "1")
        .should("have.not.text", "2");
    });
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=500000-10000000&city=Niles");
    featuredListingsPage.propertyPrc.each((priceElement) => {
      const price = priceElement.text().replace(/\D/g, "");
      expect(parseInt(price)).to.be.above(7000000);
      expect(parseInt(price)).to.be.below(10000000);
    });
  });
  it("Should search by city", () => {
    featuredListingsPage.cityInp.type("Niles", { force: true });
    featuredListingsPage.startSearchBtn.click();
    featuredListingsPage.moreInfoBtn.click();
    featuredListingsPage.listingDet.within(() => {
      cy.contains(" Single-family home").should("be.visible");
      cy.contains("311 W Niles rd").should("be.visible");
      cy.contains(" Asking Price: $ 7,100,000").should("be.visible");
      cy.contains("Square Feet: 924").should("be.visible");
      cy.contains("Lot Size: 9200").should("be.visible");
      cy.contains("Garage: 1").should("be.visible");
      cy.contains("Bathrooms: 2").should("be.visible");
      cy.contains("Bedrooms: 3").should("be.visible");
      cy.contains("Realtor: Narachan B").should("be.visible");
      cy.contains(
        "Great curb appeal with dark board and batten facade highlighted by stone and wood grain accents and modern front entry door."
      ).should("be.visible");
    });
  });
});
