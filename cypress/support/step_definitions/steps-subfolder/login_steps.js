import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../page-objects/Login.page"

const loginPage = new Login();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// #region GIVEN Steps


Given('I am in the login page', () => {
    cy.url().should('includes', 'login')
})
// #endregion

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

// #region THEN Steps
Then('I should see homepage', ()=>{
    cy.url().should('be.eq', 'http://127.0.0.1:8080/')
})

Then('I should see the error message {string} for the {string} field', (errorMessage, field)=>{
  loginPage.elements.loginSection.errors.invalidTextBox().should('have.length', 1)
  cy.url().should('includes', 'login')
  if(field=="username"){
    loginPage.elements.loginSection.usernameTextBox().invoke('prop', 'validationMessage').should('equal', errorMessage)
  }else {
    loginPage.elements.loginSection.passwordTextBox().invoke('prop', 'validationMessage').should('equal', errorMessage)
  }

})

Then('I should see the error message {string}', (errorMessage)=>{
  cy.url().should('includes', 'login')
  cy.on(loginPage.elements.loginSection.errors.alert(), (text) => {
    expect(text).to.contains(errorMessage);
  });

})

Then('I should see the page logo', ()=>{
    loginPage.elements.pageLogo().should("be.visible")
  })

Then('I should see the subtitle {string}', (subtitle)=>{
  loginPage.elements.subtitle().should("have.text", subtitle)
})

Then('I should see an slider presentation below it', ()=>{
  loginPage.elements.slider().should("be.visible")
})

Then('I should see a login form section with the title {string}', (loginTitle)=>{
  loginPage.elements.loginSection.form().should("be.visible")
  loginPage.elements.loginSection.h2().should("have.text", loginTitle)
})

Then('I should see a {string} option', (label)=>{
  if (label=="Guest"){
    loginPage.elements.loginSection.guestOption().should("be.visible").and('contain.text', label)
  } else if (label=="Log in"){
    loginPage.elements.loginSection.userOption().should("be.visible").and('contain.text', label)
  }
})

Then('I should see a link button below with the label {string}', (label)=>{
  loginPage.elements.loginSection.signUpLink().should("be.visible").and('contain.text', label)
})

Then('I should see a {string} button below', (label)=>{
  if (label=="Sign in with Google"){
    loginPage.elements.loginSection.googleSignIn().should("be.visible").and('contain.text', label)
  } else if (label=="Log In"){
    loginPage.elements.loginSection.submitButton().should("be.visible").and('have.value', label)
  }
})

Then('I should see a {string} field', (field)=>{
  if (field=="Username"){
    loginPage.elements.loginSection.usernameTextBox().should("be.visible")
    loginPage.elements.loginSection.usernameTextBox().invoke('attr', 'placeholder').should('contain', field)
  } else if (field=="Password"){
    loginPage.elements.loginSection.passwordTextBox().should("be.visible")
    loginPage.elements.loginSection.passwordTextBox().invoke('attr', 'placeholder').should('contain', field)
    loginPage.elements.loginSection.passwordTextBox().invoke('attr', 'type').should('be.eq', 'password')
  }
})

Then('I should see the initial recipe', ()=>{
  loginPage.elements.slider().invoke('attr', 'current').should('be.eq', "0")
})
// #endregion