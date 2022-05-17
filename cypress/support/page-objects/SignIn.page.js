/// <reference types="cypress" />
export class SignIn {

    // Sign In Page attributes
    url = '/pages/singup.html';

    // Sign In Page elements
    heading = () => cy.get('.page-heading')

    // Sign In Page actions
    navigate = () => cy.visit(url)
    clickOutsideElement = () => cy.get('body').click(0, 0)


    signInSection = {

        // Sign Up section elements
        //title: () => cy.get(),
        txtUsername: () => cy.get('input[placeholder="Username"]'),
        txtEmail: () => cy.get('input[placeholder="Email"]'),
        txtPassword: () => cy.get('input[placeholder="Password"]'),
        btnSubmit: () => cy.get("#submitBtn"),

        // Sign Up section actions
        enterUsername: function (username) { this.txtUsername().type(username) },
        enterEmail: function (email) { this.txtEmail().type(email) },
        enterPassword: function (password) { this.txtPassword().type(password) },
        submit: function () { this.btnSubmit().click() },
    }

}