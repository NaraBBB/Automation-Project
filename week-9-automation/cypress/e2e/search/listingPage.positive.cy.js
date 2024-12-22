import listingPage from "../../page_objects/listingPage";

describe("Testing Listing page", () => {
  let verificationTexts; //!  зарласан учир уг хувьсагчид дараа нь утга оноох боломжтой.
  // Load fixture before any test
  before(function () {
    //! Энэ нь Cypress-ийн тусгай hook бөгөөд бүх it тестүүдээс өмнө нэг л удаа ажиллана.
    cy.fixture("verificationTexts.json").then((data) => {
      //! cy.fixture асинхрон команд тул өгөгдөл бүрэн ачаалагдсаны дараа then callback ашиглан тухайн өгөгдлийг data хувьсагчид хадгалж байна.
      verificationTexts = data; //!Assign loaded JSON data to the variable
      /* verificationTexts = data
    `data` нь JSON файлаас ирсэн өгөгдөл бөгөөд үүнийг `verificationTexts` хувьсагчид оноож байна.
    - Ингэснээр `verificationTexts`бүх тестүүдэд (it блокуудад) ашиглагдах боломжтой болно.
*/
    });
  });
  beforeEach(function () {
    cy.visit(
      `${verificationTexts.baseUrl}${verificationTexts.featuredListUrl}`
    );
    cy.errorHandler();
    listingPage.nigthMde.click();
  });
  it("Should search by keyword", () => {
    listingPage.searchListInp.type("wood grain", { force: true });
    listingPage.startSearchBtn.click();
    listingPage.listedPropt.should(
      "contain.text",
      verificationTexts.validationLP.searchResult
    );
  });

  it("Should search by bedrooms", () => {
    listingPage.bedroomsDrpdn.click();
    listingPage.bedrooms3PlusOpt.click();
    listingPage.startSearchBtn.click();
    listingPage.selectedBedroomsVal.should(
      "contain.text",
      verificationTexts.validationLP.selectedBedrooms
    );
  });

  it("Should search by price", () => {
    //price-specific URL
    cy.visit(verificationTexts.validationLP.featuredListingsPriceUrl);
    listingPage.propertyPrc //!propertyPrc element from listingPage
      .contains(verificationTexts.validationLP.propertyPrice) //! propertyPrice is from json file
      .should("be.visible");
  });

  it("Should search by city", () => {
    listingPage.cityInp.type("Niles").click();
    listingPage.startSearchBtn.click();
    listingPage.moreInfoBtn.click();

    const expectedDetails = verificationTexts.validationLP.propertyDetails;
    listingPage.listingDtls.within(() => {
      //!Энэ нь Cypress-ийн команд бөгөөд JavaScript массив зэрэг объектуудыг Cypress командын дараалалд оруулна.
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});

//cy.wrap Энэ нь Cypress-ийн команд бөгөөд JavaScript массив зэрэг объектуудыг Cypress командын дараалалд оруулна.
