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