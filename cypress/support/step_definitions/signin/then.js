import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"
import { SignIn } from "../../page-objects/SignIn.page"

const loginPage = new Login();
const signInPage = new SignIn();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Then('I should see homepage', () => {
    cy.url().should('eq', Cypress.config().baseUrl)
})