import registrationPage from "../../page_objects/registrationPage";

describe("Registration Tests", () => {
  beforeEach(function () {
    cy.visit("auth/register");
    cy.fixture("data.json").as("data"); 
    cy.fixture("verificationTexts.json").as("messages"); 
  });

  it.only("Should required field errors should appear when submitting the Registration Form without input ", () => {
 
      cy.contains(messages.firstNameRequired).should("be.visible");
      cy.contains(messages.lastNameRequired).should("be.visible");
      cy.contains(messages.emailRequired).should("be.visible");
      cy.contains(messages.passwordRequired).should("be.visible");
    });
  });
  it("Should not register with an already existing email account", function () {
    cy.get("@data").then((data) => {
      cy.get("@messages").then((messages) => {
        registrationPage.negativeRegister(data.valid);
        cy.contains(messages.registrationInputError).should("be.visible");
      });
    });
  });

