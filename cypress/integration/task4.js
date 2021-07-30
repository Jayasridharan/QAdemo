describe('Task 4', () => {
    it('Login to dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('unknown123@')
      cy.contains('Log in').click()
      cy.contains('Calendar').click()
      cy.get('select').select('California association')
      cy.contains('Create New Event').click()
      cy.get('#eventTitle').type('Alert! Meeting Schedule')
      cy.get('#eventDescription').type('Meeting at today 4.00 Pm')
      cy.contains('Create Event').click()
    })
})