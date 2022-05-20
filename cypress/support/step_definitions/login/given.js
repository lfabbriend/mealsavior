import { Given, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"

const loginPage = new Login()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


