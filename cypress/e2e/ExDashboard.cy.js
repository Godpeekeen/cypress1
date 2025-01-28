///<reference type = "cypress"\>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  it("ExecutiveDashboard", () => {
    cy.visit("https://am.ebs-rcm.com/")
    cy.get('#username').type('PS-FINANCE')
    cy.get('#password').type('PsFinance_2024')
  
    })