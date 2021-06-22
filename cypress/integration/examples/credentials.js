
/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  cy.pause
  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    
    // https://on.cypress.io/type
    cy.get('.action-email')
      .type(Cypress.env("UserName")).should('have.value', 'ajayachar@gmail.com')

    cy.get('.action-email')
    .type(Cypress.env("Password")).should('have.value', 'Test123')
  })

})