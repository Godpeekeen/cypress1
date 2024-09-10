export class LoginPage{   
    
enterUserName(teller1){
    cy.get('#UserName').type(teller1)
}

enterPassword(password){
    cy.get('#Password').type(password)
    cy.wait(2000)
}

clickLogin(){
    cy.contains('Log in').click()
}

}