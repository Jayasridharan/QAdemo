describe('D2Task2', () => {
    it('Login to dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('onepiece')
      cy.contains('Log in').click()
      cy.get(':nth-child(8) > .nav-link').click()
      cy.get('.editProfile').click({ multiple: true })
      cy.contains('Update').click()
      cy.get('#workOrderStatus').click()
      cy.contains('Accept').click()
      cy.get('[style="text-align: right;"] > .btn-primary').click()
      cy.contains('Update').click()
      cy.get('#workOrderStatus').click()
      cy.contains('Schedule').click()

      

    })
})
