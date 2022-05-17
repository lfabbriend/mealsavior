import { Given, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"

const loginPage = new Login()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// #region GIVEN Steps


Given('I am in the login page', () => {
    cy.url().should('includes', 'login')
})
// #endregion
