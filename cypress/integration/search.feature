Feature: Search for a recipe
  Scenario: User searchs for a recipe
    Given I am in the "Index" page
    When I enter "meat" on the search bar
    And I click the Search button
    Then recipes with "meat" are shown