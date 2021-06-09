it('logs in using env variables', () => {
    const username = Cypress.env('fff')
    const password = Cypress.env('Password')
  
    Cypress.log(username)
    Cypress.log(password)
    
  })