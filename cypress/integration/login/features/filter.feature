# diets: No Diet, Vegetarian, Vegan, Celiac
# coincidences: Strict, Quite Strict, No restrictions

Feature: Recipes filters
	Scenario: User filters by an ingredient with no diet and strict coincidence
		Given the user is on the Home page
		When the user selects ingredient "Garlic"
		And the user selects "No diet" as Type of Diet
		And the user selects "Strict" coincidence
		And the user clicks the Search button
		Then only recipes with ingredient "Garlic" are shown

	Scenario: User filters by two ingredients with no diet and strict coincidence
		Given the user is on the Home page
		When the user selects ingredients "Garlic" and "Spinach"
		And the user selects "No diet" as Type of Diet
		And the user selects "Strict" coincidence
		And the user clicks the Search button
		Then only recipes with ingredients "Garlic" and "Spinach" are shown

	Scenario: User filters for Vegetarian recipes
		Given the user is on the Home page
		When the user selects "Vegetarian" as Type of Diet
		And the user selects "No restrictions" coincidence
		And the user clicks the Search button
		Then only Vegetarian recipes are shown