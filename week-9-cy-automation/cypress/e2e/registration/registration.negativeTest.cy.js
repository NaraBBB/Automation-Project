import registrationPage from "../../page_objects/registrationPage";

describe("Registration Tests", () => {

  beforeEach(function () {
    cy.visit("auth/register");
    cy.fixture("userPersonalDetails.json").as("userDetails");
    cy.fixture("validationMessages.json").as("messages");
  });

  it("Should required field errors should appear when submitting the Registration Form without input ", function () {
    registrationPage.registerBtn.click();
    cy.contains(this.messages.firstNameRequired).should("be.visible");
    cy.contains(this.messages.lastNameRequired).should("be.visible");
    cy.contains(this.messages.emailRequired).should("be.visible");
    cy.contains(this.messages.passwordRequired).should("be.visible");
  });
  
  it("Should not register with an already existing email account", function () {
    registrationPage.negativeRegister(this.userDetails.valid);
    cy.contains(this.messages.registrationInputError).should("be.visible");
  });
});
