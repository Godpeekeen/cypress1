import { LoginPage } from "./IBILEPages/Login_Page"
///<reference type = "cypress"\>

const loginPage = new LoginPage()

 
it("TellerLogin", () => {
    cy.visit("https://ims.ebs-rcm.com/")

    loginPage.enterUserName('WJEROME')
    loginPage.enterPassword('P@ssw0rd')
    loginPage.clickLogin()

  })

it("AdminLogin", () => {
  cy.visit("https://ims.ebs-rcm.com/")

  loginPage.enterUserName('WJEROME')
  loginPage.enterPassword('P@ssw0rd')
  loginPage.clickLogin()


})

