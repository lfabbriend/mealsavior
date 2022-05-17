/// <reference types="cypress" />

export class Home {
  elements = {
    searchBar: () => cy.get('input.search'),
    searchBarBtn: () => cy.get('button.sendSearchBtn'),
    ingredientsFilter: () => cy.get('input[placeholder="Ingredients"]'),
    typeOfDietFilter: () => cy.get('input[placeholder="Type of Diet"]'),
    coincidencesFilter: () => cy.get('input[placeholder="Coincidences"]'),
    filterSearchBtn: () => cy.get('#submitFiltersBtn'),
    recipesContainer: () => cy.get('.recipesContainer'),
    nthRecipeCard: (nth) => cy.get('.recipesContainer a').eq(nth)
  }

  /**
   * @description Method used to search for a specific input on the navigation bar
   * @param {string} input the string to search for
   */
  search(input) {
    this.elements.searchBar().type(input)
    this.elements.searchBarBtn().click()
  }

  /**
   * @description Method used to filter recipes
   * @param {Array} ingredients An array of valid ingredients
   * @param {string} diet valid options are "No Diet", "Vegetarian", "Vegan" and "Celiac"
   * @param {string} coincidence valid options are "Strict", "Quite strict" and "No restrictions" 
   */
  filterRecipes(ingredients, diet, coincidence) {
    this.elements.ingredientsFilter().select(ingredients)
    this.elements.ingredientsFilter().select(diet)
    this.elements.ingredientsFilter().select(coincidence)
    this.filterSearchBtn().click()
  }

  /**
   * @description opens the detail of the nth-recipe on the list
   * @param {number} nth
   */
  openNthRecipeDetails(nth) {
    this.elements.nthRecipeCard(nth).click()
  }
}