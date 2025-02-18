///<reference type = "cypress"\>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  it("Newhr.ebs-rcm.com", () => {
    cy.visit("https://hr.ebs-rcm.com/")
    cy.get('#Username').type('nwachukwu.chima@acdsconsulting.com')
    cy.get('#Password').type('Password4$')
    cy.contains('Login').click()
    
  
    })