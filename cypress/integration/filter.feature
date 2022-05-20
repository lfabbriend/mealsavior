# diets: No Diet, Vegetarian, Vegan, Celiac
# coincidences: Strict, Quite Strict, No restrictions

Feature: Recipes filters
	Scenario: User filters by an ingredient with no diet and strict coincidence
		Given I am in the "Index" page
		When I select ingredient "Garlic"
		And I select "No diet" as Type of Diet
		And I select "Strict" coincidence
		And I click the Search button
		Then only recipes with ingredient "Garlic" are shown

	Scenario: User filters by two ingredients with no diet and strict coincidence
		Given I am in the "Index" page
		When I select ingredients "Garlic" and "Spinach"
		And I select "No diet" as Type of Diet
		And I select "Strict" coincidence
		And I click the Search button
		Then only recipes with ingredients "Garlic" and "Spinach" are shown

	Scenario: User filters recipes by diet
		Given I am in the "Index" page
		When I select "Vegetarian" as Type of Diet
		And I select "No restrictions" coincidence
		And I click the Search button
		Then only "Vegetarian" recipes are shown