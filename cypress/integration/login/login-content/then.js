import {Then} from "cypress-cucumber-preprocessor/steps"
const Login = require("../../../page-objects/Login.page")

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  Then('I should see the page logo', ()=>{
    Login.elements.pageLogo().should("be.visible")
  })

Then('I should see the subtitle {string}', (subtitle)=>{
  Login.elements.subtitle().should("have.text", subtitle)
})

Then('I should see an slider presentation below it', ()=>{
  Login.elements.slider().should("be.visible")
})

Then('I should see a login form section with the title {string}', (loginTitle)=>{
  Login.elements.loginSection.form().should("be.visible")
  Login.elements.loginSection.h2().should("have.text", loginTitle)
})

Then('I should see a {string} option', (label)=>{
  if (label=="Guest"){
    Login.elements.loginSection.guestOption().should("be.visible").and('contain.text', label)
  } else if (label=="Log in"){
    Login.elements.loginSection.userOption().should("be.visible").and('contain.text', label)
  }
})

Then('I should see a link button below with the label {string}', (label)=>{
  Login.elements.loginSection.signUpLink().should("be.visible").and('contain.text', label)
})

Then('I should see a {string} button below', (label)=>{
  if (label=="Sign in with Google"){
    Login.elements.loginSection.googleSignIn().should("be.visible").and('contain.text', label)
  } else if (label=="Log In"){
    Login.elements.loginSection.submitButton().should("be.visible").and('have.value', label)
  }
})

Then('I should see a {string} field', (field)=>{
  if (field=="Username"){
    Login.elements.loginSection.usernameTextBox().should("be.visible")
    Login.elements.loginSection.usernameTextBox().invoke('attr', 'placeholder').should('contain', field)
  } else if (field=="Password"){
    Login.elements.loginSection.passwordTextBox().should("be.visible")
    Login.elements.loginSection.passwordTextBox().invoke('attr', 'placeholder').should('contain', field)
    Login.elements.loginSection.passwordTextBox().invoke('attr', 'type').should('be.eq', 'password')
  }
})

Then('I should see the initial recipe', ()=>{
  Login.elements.slider().invoke('attr', 'current').should('be.eq', "0")
})
