//cy.sqlServer(`SELECT 'test').should('eq', 'test');

/// <reference types = "cypress" />

context('Window', () => {

    it ('Database interaction', () => {

        cy.sqlServer('SELECT * FROM Persons').then(function(result){
            console.log(result[0][1]) // David 
            console.log(result[2][3]) // Brasov 
        })
    })
})