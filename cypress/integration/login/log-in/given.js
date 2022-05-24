import {Given} from "cypress-cucumber-preprocessor/steps"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Given('I open index page', () => {
    cy.visit('/')
})

Given('I am in the login page', () => {
    cy.url().should('includes', 'login')
})