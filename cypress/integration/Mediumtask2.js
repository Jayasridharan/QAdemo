describe('D2Task2', () => {
    it('Login to dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('onepiece')
      cy.contains('Log in').click()
      cy.get(':nth-child(8) > .nav-link').click()
      cy.get('.btn-primary').click()
      cy.get(':nth-child(3) > .form-control').type('Gardenconstruction')
      cy.get(':nth-child(8) > .btn-primary').click()
      cy.get('.modal-body > div > .btn-primary').click()
      cy.get('#newVendorEmail').type('AppleConstructions@gmail.com')
      cy.get('.modal-body > .btn-primary').click()
      cy.get(':nth-child(10) > .jobButton').click()
      cy.get('.form-control').type('Construct a flower Gardern')
      const filepath = 'Images/work order.pdf'
          cy.contains('PDF').click()
          cy.get('#inputPDFFile').attachFile(filepath)
          cy.get('[style="text-align: right; margin-top: 25px;"] > .btn-primary').click()
          cy.get('.form-control').type('ktown@gmail.com')
          cy.get('[style="text-align: right; margin-top: 25px;"] > .btn-primary').click()
          cy.get('[style="text-align: right; float: right; width: 60%;"] > .btn-primary').click()
     
          
  
     
      
  
  

    })
})