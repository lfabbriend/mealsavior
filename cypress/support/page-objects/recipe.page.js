/// <reference types="cypress" />

export class RecipeDetail { 
  elements = {
    rater: () => cy.get('.raterStar'),
    nthRaterStar: (nth) => cy.get('.raterStar .star').eq(nth),
  }

  rate(stars) {
    this.elements.nthRaterStar(stars - 1).click()
  }
}