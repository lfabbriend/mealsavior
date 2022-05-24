import {Before, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

import { Login } from "../../../page-objects/Login.page.js"
import { SignIn } from "../../../page-objects/SignIn.page"

const loginPage = new Login();
const signUpPage = new SignIn();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Given('I open index page', () => {
    cy.visit('/')
})

Given('I am in the Sign In page', () => {
    cy.url().should('includes', 'signup')
})

When("When I click the Don't you have an account? Sign up! link in the welcome section", ()=>{
    loginPage.elements.loginSection.signUpLink().click()
})

When('I fill username with {string}', (user)=>{
    signUpPage.signUp.enterUsername(user)

})

And('I fill email with {string}', (email)=>{
    signUpPage.signUp.enterEmail(email)
})

And('I fill password with {string}', (password)=>{
    signUpPage.signUp.enterPassword(password)
})

And('I click the Sign Up button', ()=>{
    signUpPage.signUp.submit()
})

Then('I should see homepage', ()=>{
    cy.url().should('includes', 'index')
})