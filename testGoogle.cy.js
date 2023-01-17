describe ('Website google.com', () => {
it ('should function with a basic search', () => {
    cy.visit('https://google.com');
    cy.get('#W0wltc > .QS5gu').click();
    cy.get('.gLFyf').type('ziarul financiar').type('{enter}');
    cy.get('#result-stats').should('exist');
})

})

