import registrationPage from "../../page_objects/registration.page";
import homePage from "../../page_objects/home.page";

describe("Registration Tests", () => {
  beforeEach(function () {
    cy.visit("/register");
    cy.fixture("example").as("data");
  });
  it("Should not register with an already existing email account", function () {
    homePage.regsPageBtn.click();

    registrationPage.regstMethod(
      this.data.valid.firstName,
      this.data.valid.lastName,
      this.data.valid.email,
      this.data.valid.password
    );
    registrationPage.regstBtn.click();
    cy.contains('Input data validation failed').should('be.visible'); 
  });
});
