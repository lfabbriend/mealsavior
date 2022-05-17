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

When('I click the Dont you have an account? Sign up! link in the welcome section', () => {
    loginPage.elements.loginSection.signUpLink().click()
})

// When('I fill username with {string}', (user) => {
//     signInPage.signInSection.enterUsername(user)

// })

When('I fill email with {string}', (email) => {
    signInPage.signInSection.enterEmail(email)
})

// When('I fill password with {string}', (password) => {
//     signInPage.signInSection.enterPassword(password)
// })

When('I click the Sign Up button', () => {
    signInPage.signInSection.submit()
})