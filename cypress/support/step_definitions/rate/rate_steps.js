import { And } from "cypress-cucumber-preprocessor/steps";
import { RecipeDetail } from "../../page-objects/recipe.page";

const recipeDetailPage = new RecipeDetail();

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

And('I rate the recipe with 3 stars', () => {
  recipeDetailPage.rate(3)
})

Then('I should see that 3 stars are marked', () => {
  recipeDetailPage.elements.nthRaterStar(1).should('have.css', 'color', 'yellow')
  recipeDetailPage.elements.nthRaterStar(2).should('have.css', 'color', 'yellow')
  recipeDetailPage.elements.nthRaterStar(3).should('not.have.css', 'color', 'yellow')
})