/// <reference types="cypress" />
export class SignUp {

    // Sign Up Page attributes
    url = 'pages/singup.html';

    // Sign Up Page elements
    heading = () => cy.get('.page-heading')

    // Sign Up Page actions
    navigate = () => cy.visit(url)
    clickOutsideElement = () => cy.get('body').click(0, 0)


    signUpSection = {

        // Sign Up section elements
        //title: () => cy.get(),
        txtUsername: () => cy.get('input[placeholder="Username"]'),
        txtEmail: () => cy.get('input[placeholder="Email"]'),
        txtPassword: () => cy.get('input[placeholder="Password"]'),
        btnSubmit: () => cy.get("#submitBtn"),

        // Sign Up section actions

        /**
         * @description It enters an username within the 'Username' text box of the Sign Up section
         * @param {String} username 
         */
        enterUsername: function (username) { this.txtUsername().type(username) },

        /**
         * @description It enters an email within the 'Email' text box of the Sign Up section
         * @param {String} email 
         */
        enterEmail: function (email) { this.txtEmail().type(email) },

        /**
         * @description It enters an password within the 'Password' text box of the Sign Up section
         * @param {String} password 
         */
        enterPassword: function (password) { this.txtPassword().type(password) },
        submit: function () { this.btnSubmit().click() },

        /**
         * @description It takes as input an username and a password in order to login and navigate to Recipes page
         * @param {String} username Username used to login with an existing account
         * @param {String} password Password used to login with an existing account
         */
        login(username, password) {
            this.enterUsername(username)
            this.enterPassword(password)
            this.clickLogInButton()
        }

    }

}