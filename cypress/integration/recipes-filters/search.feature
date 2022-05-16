Feature: recipes search bar
	Scenario: User searchs for a recipe
		Given the user is on the Home page
		When the user enters "meat" on the search bar
		And the user clicks the Search button
		Then recipes with "meat" are shown