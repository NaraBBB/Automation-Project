import registrationPage from "../../page_objects/registration.page";

describe("Registration Tests", () => {
  beforeEach(function () {
    cy.visit("auth/register");
    cy.fixture("example").as("data");
  });

  it("Should not register with an already existing email account", function () {
    registrationPage.NegativeRegisterMethod(this.data);
    cy.contains("Input data validation failed").should("be.visible");
  });
});
