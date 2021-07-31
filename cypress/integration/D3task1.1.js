describe('D3Task1', () => {
    it('upload document in the document section', () => {
      cy.visit('https://dev.devmobo.com/login')
      cy.get('#email').type('unknown1@gmail.com')
      cy.get('#password').type('onepiece')
      cy.contains('Log in').click()
      cy.get(':nth-child(6) > .nav-link').click()
      cy.contains('Add Contacts').click()
      var genArr = Array.from({length:12},(v,k)=>k+1);
    cy.wrap(genArr).each((index) => {
        if(index>=2){
            var temp = 0;
             const tableValues = ["Cierra Veg", "AAAA", "random6@gmail.com","1840 Dovetail Drive","Hickory Hills","1234","Illinois","60457","847-308-2277"]
             if(index>=7){
                cy.get('[style="margin-left: 10px;"]').click()

            }
            for (temp = 1; temp <10; temp++) {
                var index2=temp-1;
                
                cy.get('tbody > :nth-child('+index+') > :nth-child('+temp+')').type(tableValues[index2])
            
            }
        }
    })
    cy.contains('Save').click({multiple: true})
  })
 })
