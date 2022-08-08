/// <reference types="cypress" />

describe('Cypress 101 assignment', () => {
  it('drag and drop sliders', () => {
      // cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/slider.html')
      // cy.get('#rangetwo').invoke('val', '90').trigger('change')
      cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo')
      cy.contains('Progress Bar & Sliders').click()
      cy.contains('Drag & Drop Sliders').click()
      cy.get('input[type=range]').invoke('val', '95')
      cy.get('#rangeSuccess').invoke('val', '95').trigger('change')
      cy.get('#rangeSuccess').should('have.text', '95')

  })
})