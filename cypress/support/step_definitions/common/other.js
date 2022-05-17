import { defineStep, Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


// some examples of common steps
defineStep('I want to wait {int} seconds', time => {
  cy.wait(time * 1000)
})

defineStep('I see {string} in the title', title => {
  cy.title().should('include', title)
})

defineStep('I see {string} in the url', url => {
  cy.url().should('include', url)
})

defineStep('I reload the browser', () => {
  cy.reload()
})