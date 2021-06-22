
/// <reference types="cypress" />

const username = Cypress.env('UserName')
const password = Cypress.env('Password')

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  cy.pause
  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.action-email')
      .type(username).should('have.value', 'ajayachar@gmail.com')

    cy.get('.action-email')
    .type(password).should('have.value', 'Test123')
  })

})