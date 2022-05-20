import { Given, When, And } from "cypress-cucumber-preprocessor/steps"
const Home = require("../../page-objects/home.page.js")

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Given('I am on the Home page', () => {
  cy.visit('/')
})

When('I select ingredient {string}', (ingredient) => {
  Home.selectIngredients([ingredient])
})

And('I select {string} as Type of Diet', (diet) => {
  Home.selectDiet(diet)
})

And('I select {string} coincidence', (coincidence) => {
  Home.selectCoincidence(coincidence)
})

And('I click the Search button', () => {
  Home.clickFilterBtn(coincidence)
})

When('I select ingredients {string} and {string}', (ingredient1, ingredient2) => {
  Home.selectIngredients([ingredient1, ingredient2])
})

// definir

// Then('Only recipes with ingredient {string} are shown', (ingredient) => {
//   Home.recipesList().forEach(recipe => {
//     recipe.ingredients
//   });
// })

// Then('Only recipes with ingredients {string} and {string} are shown', (ingredient1, ingredient2) => {

// })