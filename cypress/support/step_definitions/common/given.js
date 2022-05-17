import { defineStep, Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"
import { SignIn } from "../../page-objects/SignIn.page"


const loginPage = new Login()
const signInPage = new SignIn()

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

defineStep('I am in the {word} page', page => {
    if (page === "Index") {

    }
  
    if (page === "Login") {
        cy.url().should('include', loginPage.url) 
    }
  
    if (page === "Sign In") {
        cy.url().should('include', signInPage.url) 
    }
  
  })