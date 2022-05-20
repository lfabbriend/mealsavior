import { And, Given } from "cypress-cucumber-preprocessor/steps";
import { RecipeDetail } from "../../page-objects/recipe.page";

const recipeDetailPage = new RecipeDetail();

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

When('I enter {string} on the search bar', () => {
  // homePage.
})

And('I click the Search button', () => {
  // homePage.
})

Then('recipes with {string} are shown', () => {
  // homePage.

})