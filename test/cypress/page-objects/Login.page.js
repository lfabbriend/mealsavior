/// <reference types="cypress" />

class Login {

    url = '/pages/login.html'
    elements{
        subtitle: () =>{ cy.get('.subtitle > p') },
        slider: () => { cy.get('#sliderContainer > app-slider') },
        loginSection:{
            form: ()  =>{ cy.get('#loginForm') },
            h2: ()=>{ cy.get('#loginForm > h2') },
            guestOption: ()=>{ cy.get('#guestOptionBtn > p') },
            userOption: ()=>{ cy.get('#userOptionBtn > p') },
            usernameTextBox: ()=>{ cy.get('.login-input[type="text"]') },
            passwordTextBox: ()=>{ cy.get('.login-input[type="password"]') },
            signUpLink: () => { cy.get('.signUpLink') },
            googleSignIn: () => { cy.get('.g-signin2') },
            submitButton: () => { cy.get('#submitBtn') }
        }
    }

    get Url(){
        return cy.url()
    }

    OpenLogin(){
        this.elements.loginSection.userOption().click()
    }

    EnterAsGuest(){
        this.elements.loginSection.guestOption().click()
    }

    enterUsername(username){
        this.elements.loginSection.usernameTextBox().clear().type(username).blur()
    }

    enterPassword(pass){
        this.elements.loginSection.usernameTextBox().clear().type(pass).blur()
    }

    clickLogInButton(){
        this.elements.loginSection.loginBtn().click()
    }

    openSignUp(){
        this.elements.loginSection.signUpLink().click()
    }

    login(username, password){
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogInButton()
    }

}

module.exports Login = new Login()