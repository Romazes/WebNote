describe('My first Test', function(){
    it('Deleting a new record.', function(){
        cy.visit('http://localhost:3000/')

        cy.get('body').then((body) => {
        if(body.find('Auto-tests').length > 0){
            cy.contains('Auto-tests').parent().within(() => {
                   cy.get('.deleteButton').click()
                })
        }
        else{
            cy.visit('http://localhost:3000/notfound')
        }
        })
    })
})