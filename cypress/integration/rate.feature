Feature: Rate a recipe

  As a user I want to rate a recipe

  Scenario: User rates a recipe
    Given I am in the "Index" page
    When I click on a recipe
    And I rate the recipe with 3 stars
    Then I should see that 3 stars are marked