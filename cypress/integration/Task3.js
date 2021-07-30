describe('Task 3', () => {
    it('Login to dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('unknown123@')
      cy.contains('Log in').click()
    })
})