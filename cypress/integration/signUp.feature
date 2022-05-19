Feature: Sign Up

    As a user I want to be able to Sign Up

    Background: Visit Sign Up Page
        Given I open Index page
        When I click the Log In button at the navbar
        And  I click the Dont you have an account? Sign up! link in the welcome section


    Scenario Outline: Successful Sign Up

        Given I am in the "Sign Up" page
        When I fill username with <username>
        And I fill email with <email>
        And I fill password with <password>
        And I click the Sign Up button
        Then I should see homepage

        Examples:
            | username        | email                 | password           |
            | "Username.Test" | "userEmail@gmail.com" | "UserPassword125!" |

    Scenario Outline: Invalid Sign Up when leaving the username empty
        Given I am in the "Sign Up" page
        When I fill email with <email>
        And I fill password with <password>
        And I click the Sign Up button
        Then I should see the error message "Please fill out this field." for the "username" field

        Examples:
            | email                 | password           |
            | "userEmail@gmail.com" | "UserPassword125!" |

    Scenario Outline: Invalid Sign Up when leaving the password empty
        Given I am in the "Sign Up" page
        When I fill username with <username>
        And I fill email with <email>
        And I click the Sign Up button
        Then I should see the error message "Please fill out this field." for the "password" field

        Examples:
            | username        | email                 | 
            | "Username.Test" | "userEmail@gmail.com" | 

    Scenario Outline: Invalid Sign Up when leaving the email empty
        Given I am in the "Sign Up" page
        When I fill username with <username>
        And I fill password with <password>
        And I click the Sign Up button
        Then I should see the error message "Please fill out this field." for the "email" field

        Examples:
            | username        | password                 | 
            | "Username.Test" | "UserPassword125!" | 