let listingId;

describe("", () => {
  beforeEach(() => {
    cy.wait(1000);
    cy.visit("/");
    cy.log_in();
  });

  it("Should create listing", function () {
    cy.fixture("homeAloneHouse.png", "binary").then((Image) => {
      const blob = Cypress.Blob.binaryStringToBlob(Image);
      
      const formData = new FormData();
      formData.append("images", blob);
      formData.append("title", "Beautiful House");
      formData.append("address", "123 Main Street");
      formData.append("city", "Los Angeles");
      formData.append("state", "CA");
      formData.append("zipCode", "90001");
      formData.append("price", 750000); // Price as a number
      formData.append("bedrooms", 3); // Number of bedrooms
      formData.append("bathrooms", 2); // Number of bathrooms
      formData.append("garage", 1); // Garage count
      formData.append("sqft", 2000); // Square feet
      formData.append("lotSize", 8000); // Lot size
      formData.append("isPublished", true);
      formData.append("description", "A lovely home with modern amenities.");

      const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
      cy.request({
        method: "POST",
        url: "/api/estate-objects",
        body: formData,
        headers: {
          Authorization: bearerToken,
        },
      }).then((postResponse) => {
        expect(postResponse.status).to.eq(201);
      });
    });
  });  
  });

