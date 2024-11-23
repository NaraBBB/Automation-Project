class Dashboard {
   get hamburgerMenuBtn() {return cy.xpath("//button[contains(@class,'css-1xk5apd')]")}
    get userIconMenu() {return cy.get('button [data-testid="PersonIcon"]') }
    get logoutBtn() {return cy.xpath("//li[text()='Logout']")}
    get fullName() {return cy.get("h6")}
    get roleLabel() {return cy.get("a p")}
  }
  export default new Dashboard();
 
