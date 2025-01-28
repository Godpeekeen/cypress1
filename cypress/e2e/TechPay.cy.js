///<reference type = "cypress"\>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  it("TechPayLogin", () => {
    cy.visit("http://abc.acdsconsulting.com")
    cy.get('.mb-4 > .mt-3 > .h-\[40px\]').type('godpeken@gmail.com')
  
  
  
    })