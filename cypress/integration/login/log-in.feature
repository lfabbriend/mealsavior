Feature: Login

    As a user I want to be able to login

    Background: Visit login Page
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

    Scenario Outline: Invalid login
        Given I am in the login page
        When I click the Login option in the Welcome section
        And I fill username with <username>
        And I fill password with <password>
        And I click the Login button
        Then I should see the error message

    Examples:
        | username | password |
        | ""  | "test"  |
        | "test2"  | ""  |
        | "safdfdsfs"  | "213213213"  |