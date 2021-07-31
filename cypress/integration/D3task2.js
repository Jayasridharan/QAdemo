describe('D3Task2', () => {
    it('Login to dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('onepiece')
      cy.contains('Log in').click()
      cy.get(':nth-child(8) > .nav-link').click()
      
       cy.get('.editLink').click({ multiple: true })
       cy.contains('Update').click()
       cy.get('#workOrderStatus').click()
       cy.contains('Accept').click()
      cy.get('[style="text-align: right;"] > .btn-primary').click()
    
      cy.get('[style="text-align: right; width: 50%; float: right;"]').contains('Update').click({ multiple: true })
    
      cy.get('#workOrderStatus').click()
      cy.get('.dropdown-item').contains('Schedule').click()
      cy.get('[aria-label="August 1, 2021"]').click()
      cy.get('[style="text-align: right;"]').contains('Save').click()
      cy.get('[style="text-align: right; width: 50%; float: right;"]').contains('Update').click({ multiple: true })
      cy.get('[style="text-align: right;"]').contains('Complete Work Order').click()
      cy.get('[style="text-align: right; width: 50%; float: right;"]').contains('Update').click({ multiple: true })
    
      cy.get('[style="text-align: right;"]').contains('Archive').click()
      cy.get('[style="margin-top: 100px; text-align: center;"]').get('.btn').click({ multiple: true })


      

    })
})
