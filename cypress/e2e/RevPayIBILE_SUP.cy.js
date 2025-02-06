Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


it("SUPLogin", () => {
  cy.visit("https://ims.ebs-rcm.com/")
  cy.get('#UserName').type('WSUP')
  cy.get('#Password').type('P@ssw0rd')
  cy.contains('Log in').click()
  cy.contains('Transactions').click()



})
