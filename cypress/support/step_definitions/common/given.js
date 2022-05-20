import { defineStep, Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"
import { SignUp } from "../../page-objects/SignUp.page"
import { Home } from "../../page-objects/home.page"


const loginPage = new Login()
const signUpPage = new SignUp()
const home = new Home()

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

defineStep('I am in the {string} page', page => {
    if (page === "Index") {
      home.navigate()
      cy.url().should('eq', Cypress.config().baseUrl)
    }
  
    if (page === "Log In") {
        cy.url().should('eq', Cypress.config().baseUrl + loginPage.url)
    }
  
    if (page === "Sign Up") {
        cy.url().should('eq', Cypress.config().baseUrl + signUpPage.url)
    }
  
  })