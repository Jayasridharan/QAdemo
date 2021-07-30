describe('D2Task3', () => {
    it('Login to dev.devmobo.com', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('onepiece')
      cy.contains('Log in').click()
      cy.contains('Associations').click()
      cy.get('#editProfile').click()
        
        cy.get('.userAvatarPic').click()
        const filepath = 'images/profile.jpg'
        cy.get('[style="position: absolute; inset: 0px; opacity: 1e-05; pointer-events: none;"]')
        
          .attachFile(filepath).click({force: true})
          //cy.get('.btn').click({multiple: true})
          cy.get('[font-size="18"]').click({ multiple: true })
          cy.get('#firstName').clear().type('kim Jang Un')
      cy.get('#lastName').clear().type('L')
      cy.get('#zip').clear().type('90012')
      cy.get('#companyName').clear().type('Moon info tech')
      cy.get('#street').clear().type('20th street')
      cy.get('#nextButton').click({force: true})
      cy.get('#loginInformationLink').click({force: true})
      cy.get('[placeholder="Enter Current Password"]').type('unknown123@')
      cy.get('[placeholder="New Password"]').type('onepiece')
      cy.get('[placeholder="Reenter New Password"]').type('onepiece')
      cy.get('#changePasswordButton').click({force: true})


        
      
    })
})