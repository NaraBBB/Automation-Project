class DashboardPage {
  get hamburgerMenuBtn() {return cy.get('.MuiBox-root.css-0.iconify.iconify--eva')}
   get userIconMenu() {return cy.get('button [data-testid="PersonIcon"]') }
   get logoutBtn() {return cy.xpath("//li[text()='Logout']")}
   get fullName() {return cy.get("h6")}
   get roleLabel() {return cy.get("a p")}
 }
 export default new DashboardPage();

