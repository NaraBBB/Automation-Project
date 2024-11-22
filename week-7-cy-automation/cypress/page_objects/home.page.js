class Homepage{

    get loginPageBtn() {return cy.get('[href="/auth/login"]')}
    get regsPageBtn() {return cy.get('[href="/auth/register"]')}
    
    }
    export default new Homepage();