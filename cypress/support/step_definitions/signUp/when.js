import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"
import { SignUp } from "../../page-objects/SignUp.page"

const loginPage = new Login();
const signUpPage = new SignUp();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

When('I click the Dont you have an account? Sign up! link in the welcome section', () => {
    loginPage.elements.loginSection.signUpLink().click()
})

When('I fill email with {string}', (email) => {
    signUpPage.signUpSection.enterEmail(email)
})

When('I click the Sign Up button', () => {
    signUpPage.signUpSection.submit()
})