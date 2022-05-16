Feature: Login page content

    As a user I want to be able explore the login page

    Background: Visit login Page
        Given I open index page
        When I click the Log In button at the navbar
    
    Scenario: Login page content explored
        Given I am in the login page
        Then I should see the subtitle "Open your fridge, select your ingredients"
        And I should see an slider presentation below it
        And I should see a login form section with the title "Welcome!"

    Scenario: Login section content explored
        Given I am in the login page
        Then I should see a "Guest" option
        And I should see a "Log in" option
        And I should see a link button below with the label "Don't you have an account? Sign up!"
        And I should see a "Sign in with Google" button below
        And I should see a "Log In" button below

    Scenario: Fields of the login with credentials options explored
        Given I am in the login page
        When I click the Login option in the Welcome section
        Then I should see a "Username" field
        And I should see a "Password" field