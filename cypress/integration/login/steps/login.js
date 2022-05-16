import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

import {Login} from "../../../page-objects/Login.page.js"

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

When('I click the Log In button at the navbar', ()=>{
    cy.get('.loginBtn').click()
})

When('I click the Login option in the Welcome section', ()=>{
    cy.get('#userOptionBtn').click()
})

When('I fill username with {string}', (user)=>{
    cy.get('.login-input[type="text"]').type(user).blur()

})


When('I fill password with {string}', (password)=>{
    cy.get('.login-input[type="password"]').type(password)
})

When('I click the Login button', ()=>{
    cy.get('#submitBtn').click()
})

Then('I should see homepage', ()=>{
    cy.url().should('includes', 'index.html')
})