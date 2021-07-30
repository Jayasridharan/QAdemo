describe('D2Task3', () => {
    it('Login to dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('unknown123@')
      cy.contains('Log in').click()
      cy.get(':nth-child(12) > .nav-link').click()
    //   cy.get('[data-target="#smsAddResidentsModal"] > .btn-primary').click()
    cy.contains('Add Contacts').click()
    
    cy.get('tbody > :nth-child(2) > :nth-child(1)').type('jack')
    cy.get('tbody > :nth-child(2)> :nth-child(2)').type(' (888) 422-5191')
    cy.get('tbody > :nth-child(2)> :nth-child(3)').type('infinity@gmail.com')
    cy.contains('Save').click({multiple : true})
     //cy.get('tbody>td>').eq(1).type('Address: 5454 Interstate 55 North Frontage Rd, Jackson, MS 39211, United States')
   
    
      
    })
})