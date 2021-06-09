it('logs in using env variables', () => {
    const username = Cypress.env('UserName')
    const password = Cypress.env('Password')
  
    Cypress.log(username)
    expect(username).to.equal('ajayachar@gmail.com')
    Cypress.log(password)
    expect(password).to.equal('Test123')
    
  })