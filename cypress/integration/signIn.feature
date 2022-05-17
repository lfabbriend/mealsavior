Feature: Sign In

    As a user I want to be able to sign in

    Background: Visit Sign In Page
        Given I open index page
        When I click the Dont you have an account? Sign up! link in the welcome section
    
    Scenario Outline: Sucessful Sign In
        Given I am in the Sign In page
        When I fill username with <username>
        And I fill email with <email>
        And I fill password with <password>
        And I click the Sign Up button
        Then I should see homepage

    Examples:
        | username | email | password |
        | polola  | polola@gmail.com  | pololapassword  |