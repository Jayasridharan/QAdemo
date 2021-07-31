describe('D3Task4', () => {
    it('Login to dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('onepiece')
      cy.contains('Log in').click()
      cy.get(':nth-child(13) > .nav-link').click()
      //cy.contains('View Calendar').click()
      cy.get('[style="font-style: italic; cursor: pointer;"]').contains('View Calendar').click({ multiple: true })
      cy.get('.rbc-btn-group').contains('Week').click()
      cy.get('.rbc-btn-group').contains('Next').click()
      cy.get('.rbc-btn-group').contains('Next').click()

      cy.get('.rbc-events-container').eq(2).click()
      cy.contains('Book a Slot').click()
      cy.contains('Select a Resident').click()
      //cy.contains('Guest Resident').click()
      cy.contains('Add Guest').click()
      cy.get('.form-control').eq(1).type('john')
      cy.get('[type=email]').type('sss@gmail.com')
      cy.get('.modal-footer > .btn').contains('Add Guest').click()
      cy.get('select').select('10:00 AM - 11:00 AM (50)')
      cy.get('[maxlength="4"]').clear().type('40')
      cy.get('.modal-footer > .btn').contains('Book Slot').click()
      






    })
})