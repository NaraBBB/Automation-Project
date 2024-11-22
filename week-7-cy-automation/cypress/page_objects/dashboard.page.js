class Dashboard {
    get hamburgerMenuBtn() {return cy.xpath("//button[contains(@class,'css-1xk5apd')]")}
    get fullName() {return cy.get("h6")}
    get roleLabel() {return cy.get("a p")}
    get title() {return cy.title()}
    get userIconMenu() {return cy.xpath("//button[contains(@class,'css-w5qhhs')]") }
    get logoutBtn() {return cy.xpath("//li[text()='Logout']")}

  }
  export default new Dashboard();
 
