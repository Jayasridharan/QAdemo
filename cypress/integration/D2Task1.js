describe('D2Task2', () => {
    it('upload document in the document section', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('unknown123@')
      cy.contains('Log in').click()
      cy.contains('Documents').click()

      const filepath = 'images/HOA.docx'
      cy.contains('Resident').click
      cy.get('#inputFile').attachFile(filepath)
      cy.get('.btn').click()

      })
    })


    
