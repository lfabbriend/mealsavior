import { When, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"

const loginPage = new Login()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// #region WHEN Steps
When('I click the Log In button at the navbar', ()=>{
    cy.get('.loginBtn').click()
})

When('I click the Login option in the Welcome section', ()=>{
    loginPage.OpenLogin()
})

When('I click the {string} arrow in the slider', (arrow)=>{
    if (arrow=="right"){
        loginPage.elements.sliderNextArrow().click()
    }
    else{
        loginPage.elements.sliderPrevArrow().click()
    }
})

When('I fill username with {string}', (user)=>{
    if (user!=""){
        loginPage.enterUsername(user)
    }
})


When('I fill password with {string}', (password)=>{
    if (password!=""){
        loginPage.enterPassword(password)
    }
})

When('I click the Login button', ()=>{
    loginPage.clickLogInButton()
})
// #endregion

