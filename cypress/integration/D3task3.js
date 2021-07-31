describe('D3Task3', () => {
    it('Login to dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('onepiece')
      cy.contains('Log in').click()
      cy.get(':nth-child(13) > .nav-link').click()
      cy.get('[style="margin-left: 15px; display: block; margin-top: 15px;"]').contains('Create Amenity').click()
      cy.get('#amenityName').type('Party')
      cy.get('#Su').click()
      cy.get('#M').click()
      cy.get('#T').click()
      cy.get('#W').click()
      cy.get('#Th').click()
      cy.get('#F').click()
      cy.get('#S').click()
      cy.get('#openHours').select('09')
      //cy.get('.form-group>  :nth-child(1)').select('10')
      cy.get(':nth-child(4)  > #openHours').select('10')
      cy.get(':nth-child(4)  > #openMinutes').eq(1).select('PM')
      
      //cy.get(':nth-child(6)  > #openHours').eq(2).select('2')
      cy.get('[style="width: 100px; margin-right: 10px;"]').eq(2).select('2')
      cy.get('#maxNumberOfGuestsPerReservation').clear().type('40')
      cy.get('.modal-footer > .btn').contains('Submit').click()


      


    })
})