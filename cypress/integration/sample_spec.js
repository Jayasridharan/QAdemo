describe('Task 1', () => {
    it('Perform google search', () => {
      cy.visit('https://www.google.com')
      cy.get('.gLFyf')
        .type('Gogosoon') 
      cy.contains('Google Search').click()
        
    })
  })