Feature: Login

    As a user I want to be able to login in order to explore my recipes

    Background: Visiting the login Page
        Given I open index page
        When I click the Log In button at the navbar
    
    Scenario Outline: Sucessful login
        Given I am in the login page
        When I click the Login option in the Welcome section
        And I fill username with <username>
        And I fill password with <password>
        And I click the Login button
        Then I should see homepage

    Examples:
        | username | password |
        | "test"  | "test"  |
        | "test2"  | "test2"  |
        | "hola"  | "hola"  |

    Scenario: Invalid login when leaving the username empty
        Given I am in the login page
        When I click the Login option in the Welcome section
        And I fill password with "password"
        And I click the Login button
        Then I should see the error message "Please fill out this field." for the "username" field

    Scenario: Invalid login when leaving the password empty
        Given I am in the login page
        When I click the Login option in the Welcome section
        And I fill username with "username"
        And I click the Login button
        Then I should see the error message "Please fill out this field." for the "password" field

    Scenario: Invalid login when typing invalid credentials
        Given I am in the login page
        When I click the Login option in the Welcome section
        And I fill username with "sadasdsadasd"
        And I fill password with "123213213"
        And I click the Login button
        Then I should see the error message "Error: Invalid user or password"
