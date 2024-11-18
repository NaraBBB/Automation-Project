describe("Logout test", () => {
    it("Should successfully login logout", () => {
      cy.viewport(1366, 768); 
      cy.login('validUsername', 'validPassword')

      cy.xpath("//button[contains(@class,'css-w5qhhs')]").click();
      cy.xpath("//li[text() = 'Logout']").click()
cy.url().should('include','https://dev.delekhomes.com/auth/login')
cy.xpath('//h4[text()="Sign in to Delek Homes"]').should('be.visible');

    });
});
