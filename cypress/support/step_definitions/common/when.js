import { defineStep, Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"
import { SignIn } from "../../page-objects/SignIn.page"


const loginPage = new Login()
const signInPage = new SignIn()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

defineStep('I open {word} page', page => {
    if (page === "Index") {
        cy.visit('/')
    }

    if (page === "Login") {
        loginPage.navigate()
    }

    if (page === "Sign In") {
        signInPage.navigate()
    }

})

defineStep('I fill username with {string}', user => {
    if (cy.url(), (Cypress.config().baseUrl + loginPage.url)) {
        if (user != "") {
            loginPage.enterUsername(user)
        }
    }

    if (cy.url() === (Cypress.config().baseUrl + signInPage.url)) {
        if (user != "") {
            signInPage.enterUsername(user)
        }
    }
})


defineStep('I fill password with {string}', password => {
    if (cy.url(), (Cypress.config().baseUrl + loginPage.url)) {
        if (password != "") {
            loginPage.enterPassword(password)
        }
    }

    if (cy.url() === (Cypress.config().baseUrl + signInPage.url)) {
        if (password != "") {
            signInPage.enterPassword(password)
        }
    }


})