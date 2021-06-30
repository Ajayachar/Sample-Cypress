
/// <reference types="cypress" />

it('logs in using env variables', () => {
  const username = Cypress.env('UserName')
  const password = Cypress.env('Password')

  expect(username).to.equal('ajayachar@gmail.com')
  expect(password).to.equal('Test123')
  
})