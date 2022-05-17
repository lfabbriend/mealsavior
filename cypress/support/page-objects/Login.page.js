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
            form: () => cy.get('#loginForm'),
            h2: () => cy.get('#loginForm > h2'),
            guestOption: () => cy.get('#guestOptionBtn > p'),
            userOption: () => cy.get('#userOptionBtn > p') ,
            usernameTextBox: () => cy.get('.login-input[type="text"]'),
            passwordTextBox: () => cy.get('.login-input[type="password"]'),
            signUpLink: () => cy.get('.signUpLink'),
            googleSignIn: () => cy.get('.g-signin2'),
            submitButton: () => cy.get('#submitBtn'),
            errors:{
                invalidTextBox: () => cy.get('.login-input:invalid'),
                alert: () => 'window:alert'
            } 
        }
    }

    /**
     * @returns The current URL of the page
     */
    get Url(){
        return cy.url()
    }

    /**
     * @description It clicks the Log in option within the 'Welcome!' section in order to expand the text fields to enter the login's credentials
     */
    OpenLogin(){
        this.elements.loginSection.userOption().click()
    }

    /**
     * @description It clicks the Guest option within the 'Welcome!' section in order to navigate to the recipes page as a guest user
     */
    EnterAsGuest(){
        this.elements.loginSection.guestOption().click()
    }

    /**
     * @description It enters an username passed as parameter within the 'Username' text box of the Login section
     * @param {String} username 
     */
    enterUsername(username){
        this.elements.loginSection.usernameTextBox().clear().type(username).blur()
    }

    /**
     * @description It enters a password passed as parameter within the 'Password' text box of the Login section
     * @param {String} pass 
     */
    enterPassword(pass){
        this.elements.loginSection.passwordTextBox().clear().type(pass).blur()
    }

    /**
     * @description It clicks the Login button within the 'Welcome!' section in order to login and to navigate to Repices page as a logged user
     */
    clickLogInButton(){
        this.elements.loginSection.submitButton().click()
    }

    /**
     * @description It clicks 'Don't you have an account? Sign up!' link button within the 'Welcome!' section in order to navigate to the SignUp page
     */
    openSignUp(){
        this.elements.loginSection.signUpLink().click()
    }

    /**
     * @description It takes as input an username and a password in order to login and navigate to Recipes page
     * @param {String} username Username used to login with an existing account
     * @param {String} password Password used to login with an existing account
     */
    login(username, password){
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogInButton()
    }

}

module.exports = new Login()