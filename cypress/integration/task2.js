describe('Task 2', () => {
    it('Create an account in dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/signup')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('unknown123@')
      cy.get('#confirmPassword').type('unknown123@')
      cy.contains('Create Account').click()
       
      cy.get('#firstName').type('tom')
      cy.get('#lastName').type('G')
      cy.get('#zip').type('90011')
      cy.get('#companyName').type('gogosoon')
      cy.get('#street').type('14th street')
      
      cy.contains('Next').click()

      cy.get('#associationName').type('California association')
      cy.get('#zipcode').type('90011')
      cy.contains('Save & finish').click()

    })
  })