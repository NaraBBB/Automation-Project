import homePage from "../../page_objects/homePage";
import featuredListingsPage from "../../page_objects/featuredListingsPage";

describe("Testing Home page", () => {
  beforeEach(function () {
    cy.visit("/");
    homePage.darkTheme.click();
  });

  it("Should search by keyword", () => {
    homePage.searchInp.type("new windows", { force: true });
    homePage.startSearchBtn.click();
    featuredListingsPage.listedPropt.should(
      "be.visible",
      "Brand new single-family residence"
    );
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsDrpdn.type("2+{enter}");
    homePage.startSearchBtn.click();
    featuredListingsPage.selectedBedroomsVal.parent().each((bedroom) => {
      cy.wrap(bedroom)
        .should("have.not.text", "1")
        .should("have.not.text", "2");
    });
  });

  it("Search Search by price", () => {
    cy.visit("/featured-listings?price=500000-10000000&city=Elgin");
    featuredListingsPage.propertyPrc.each((priceElement) => {
      const price = priceElement.text().replace(/\D/g, "");
      expect(parseInt(price)).to.be.above(3000000);
      expect(parseInt(price)).to.be.below(5100000);
    });
  });

  it("Should search by city", () => {
    homePage.cityInp.type("Elgin", { force: true }).click();
    homePage.startSearchBtn.click();
    featuredListingsPage.moreInfoBtn.click();
    featuredListingsPage.listingDet.within(() => {
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
