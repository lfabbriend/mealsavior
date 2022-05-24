import {When} from "cypress-cucumber-preprocessor/steps"

const Login = require("../../../page-objects/Login.page")

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

When('I click the Log In button at the navbar', ()=>{
    cy.get('.loginBtn').click()
})

When('I click the Login option in the Welcome section', ()=>{
    Login.OpenLogin()
})

When('I click the {string} arrow in the slider', (arrow)=>{
    if (arrow=="right"){
        Login.elements.sliderNextArrow().click()
    }
    else{
        Login.elements.sliderPrevArrow().click()
    }
})