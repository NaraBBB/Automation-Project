import newRealestatePage from "../page_objects/newRealestatePage";

describe("UI Test: Create a New Listing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.log_in();
  });

  it("should allow a user to create a new real estate listing", function () {
    cy.visit("/dashboard/real-estate/new");
    cy.get('[name="title"]').should("exist");
    newRealestatePage.createNewRealEstate(
      "Luxury Apartment",
      "Spacious apartment in NYC",
      "New York",
      "123 Main Street",
      "10001",
      "uiHouse.png",
      "500000",
      "3",
      "2",
      "1",
      "2000",
      "5000"
    );
  });
});
