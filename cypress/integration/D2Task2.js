describe('D2Task2', () => {
    it('upload document in the document section', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('onepiece')
      cy.contains('Log in').click()
      cy.contains('Jobs').click()
      cy.contains('Create Work Order').click()
      cy.get('[placeholder="Title"]').type('GardernConstruction')
      cy.contains('Select a Vendor').click()
      cy.contains('Create Vendor').click()
      cy.get('#newVendorEmail').type('AppleConstructions@gmail.com')
      cy.get('.modal-body > .btn-primary').click()
      // cy.get('#newVendorFirstName').type('Mr. Thomson')
      // cy.get('#newVendorLastName').type('Adam')
      // cy.contains('Create Vendor').click()
      // cy.get('.form-control').type('Gardern Construction')
      cy.contains('Next').click
      cy.get('.form-control').type('I request to build a flower gardern')
      const filepath = 'images/work order.pdf'
      cy.get('#inputPDFFile').attachFile(filepath)
      cy.contains('Next').click
      cy.get('.form-control').type('ktown@gmail.com')
      cy.contains('Next').click
      
    })
})

