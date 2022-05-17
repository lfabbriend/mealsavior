import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps"
const Login = require("../../page-objects/Login.page")

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// #region GIVEN Steps
Given('I am in the Sign In page', () => {
    cy.url().should('includes', 'signup')
})
// #endregion

// #region WHEN Steps
When('I click the Dont you have an account? Sign up! link in the welcome section', () => {
    loginPage.elements.loginSection.signUpLink().click()
})

When('I fill username with {string}', (user) => {
    signUpPage.signUp.enterUsername(user)

})

When('I fill email with {string}', (email) => {
    signUpPage.signUp.enterEmail(email)
})

When('I fill password with {string}', (password) => {
    signUpPage.signUp.enterPassword(password)
})

When('I click the Sign Up button', () => {
    signUpPage.signUp.submit()
})
// #endregion

// #region THEN Steps
Then('I should see homepage', () => {
    cy.url().should('includes', 'index')
})
// #endregion




