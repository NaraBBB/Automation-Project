Cypress.Commands.add("log_in", (email, password) => {
  cy.request("POST", "/api/users/login", {
    email: email,
    password: password,
  }).then((response) => {
    window.localStorage.setItem("accessToken", response.body.accessToken);
  });
});

Cypress.Commands.add("deleteListing", (listingId) => {
  const bearerToken = `Bearer ${localStorage.getItem("accessToken") || ""}`;
  cy.request({
    method: "DELETE",
    url: `/api/estate-objects/${listingId}`,
    headers: {
      Authorization: bearerToken,
    },
  }).then((response) => {
    expect(response.status).to.eq(200); //
  });
});

Cypress.Commands.add("createListing", () => {
  cy.fixture("images/beautifulHouse.png", "binary").then((Image) => {
    const blob = Cypress.Blob.binaryStringToBlob(Image);

    const formData = new FormData();
    formData.append("images", blob);
    formData.append("title", "Beautiful House");
    formData.append("address", "123 Main Street");
    formData.append("city", "Los Angeles");
    formData.append("state", "CA");
    formData.append("zipCode", "90001");
    formData.append("price", 750000);
    formData.append("bedrooms", 3);
    formData.append("bathrooms", 2);
    formData.append("garage", 1);
    formData.append("sqft", 2000);
    formData.append("lotSize", 8000);
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
      const decoder = new TextDecoder("utf-8");
      const decodedString = decoder.decode(new Uint8Array(postResponse.body));
      const listingId = JSON.parse(decodedString).id;
      return listingId;
    });
  });
});
