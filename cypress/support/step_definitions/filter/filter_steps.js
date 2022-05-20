import { When, And } from "cypress-cucumber-preprocessor/steps"
import { Home } from '../../page-objects/home.page'

const homePage = new Home()

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

When('I select ingredient {string}', (ingredient) => {
  homePage.selectIngredients([ingredient])
})

And('I select {string} as Type of Diet', (diet) => {
  homePage.selectDiet(diet)
})

And('I select {string} coincidence', (coincidence) => {
  homePage.selectCoincidence(coincidence)
})

And('I click the Search button', () => {
  homePage.clickFilterBtn(coincidence)
})

When('I select ingredients {string} and {string}', (ingredient1, ingredient2) => {
  homePage.selectIngredients([ingredient1, ingredient2])
})

// definir

// Then('Only recipes with ingredient {string} are shown', (ingredient) => {
//   homePage.recipesList().forEach(recipe => {
//     recipe.ingredients
//   });
// })

// Then('Only recipes with ingredients {string} and {string} are shown', (ingredient1, ingredient2) => {

// })