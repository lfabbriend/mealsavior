import {Then} from "cypress-cucumber-preprocessor/steps"
const Login = require("../../../page-objects/Login.page")

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Then('I should see homepage', ()=>{
    cy.url().should('be.eq', 'http://127.0.0.1:8080/')
})

Then('I should see the error message {string} for the {string} field', (errorMessage, field)=>{
  Login.elements.loginSection.errors.invalidTextBox().should('have.length', 1)
  cy.url().should('includes', 'login')
  if(field=="username"){
    Login.elements.loginSection.usernameTextBox().invoke('prop', 'validationMessage').should('equal', errorMessage)
  }else {
    Login.elements.loginSection.passwordTextBox().invoke('prop', 'validationMessage').should('equal', errorMessage)
  }

})

Then('I should see the error message {string}', (errorMessage)=>{
  cy.url().should('includes', 'login')
  cy.on(Login.elements.loginSection.errors.alert(), (text) => {
    expect(text).to.contains(errorMessage);
  });

})

