describe('My first Test', function(){
    it('Creating a new record.', function(){
        cy.visit('http://localhost:3000/')

        cy.get('.titleField')
        .type('Auto-tests')

        cy.get('.descriptionField').type('It\'s description did ROBOT.')

        cy.contains('Add Note').click()
    })
})