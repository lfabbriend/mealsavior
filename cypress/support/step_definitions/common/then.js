import { defineStep, Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"
import { SignUp } from "../../page-objects/SignUp.page"


const loginPage = new Login()
const signUpPage = new SignUp()

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

defineStep('I should see the error message {string} for the {string} field', (errorMessage, field) => {
  if (cy.url() === (Cypress.config().baseUrl + loginPage.url)) {
  loginPage.elements.loginSection.errors.invalidTextBox().should('have.length', 1)
  cy.url().should('eq', Cypress.config().baseUrl + loginPage.url)
  if (field == "username") {
    loginPage.elements.loginSection.usernameTextBox().invoke('prop', 'validationMessage').should('equal', errorMessage)
  } 

  if (field == "password") {
    loginPage.elements.loginSection.passwordTextBox().invoke('prop', 'validationMessage').should('equal', errorMessage)
  }
}

if (cy.url() === (Cypress.config().baseUrl + signUpPage.url)) {
  loginPage.elements.loginSection.errors.invalidTextBox().should('have.length', 1)
  cy.url().should('eq', Cypress.config().baseUrl + signUpPage.url)
  if (field == "username") {
    signUpPage.signUpSection.txtUsername().invoke('prop', 'validationMessage').should('equal', errorMessage)
  } 
  if (field == "password") {
    signUpPage.signUpSection.txtPassword().invoke('prop', 'validationMessage').should('equal', errorMessage)
  }

  if (field == "email") {
    signUpPage.signUpSection.txtEmail().invoke('prop', 'validationMessage').should('equal', errorMessage)
  }
}

})