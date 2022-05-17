/// <reference types="cypress" />

class Login {

    url = '/pages/login.html'
    elements={
        pageLogo: () => cy.get('.loginPageHeader > img'),
        subtitle: () => cy.get('.subtitle > p'),
        slider: function (){return cy.get('#sliderContainer > app-slider') },
        sliderNextArrow: function (){return this.slider().shadow().find('.slider').find('button.slider-next-btn')},
        sliderPrevArrow: function () {return this.slider().shadow().find('.slider').find('button.slider-prev-btn')},
        loginSection:{
            form: ()  => cy.get('#loginForm'),
            h2: ()=> cy.get('#loginForm > h2'),
            guestOption: ()=> cy.get('#guestOptionBtn > p'),
            userOption: ()=> cy.get('#userOptionBtn > p') ,
            usernameTextBox: ()=>cy.get('.login-input[type="text"]'),
            passwordTextBox: ()=>cy.get('.login-input[type="password"]'),
            signUpLink: () => cy.get('.signUpLink'),
            googleSignIn: () => cy.get('.g-signin2'),
            submitButton: () => cy.get('#submitBtn'),
            errors:{
                invalidTextBox: () => cy.get('.login-input:invalid'),
                alert: () => 'window:alert'
            } 
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
        this.elements.loginSection.passwordTextBox().clear().type(pass).blur()
    }

    clickLogInButton(){
        this.elements.loginSection.submitButton().click()
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

module.exports = new Login()