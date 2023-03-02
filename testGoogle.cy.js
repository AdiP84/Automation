describe ('Website google.com', () => {
it ('should function with a basic search', () => {
    cy.visit('https://google.com');
    cy.get('#W0wltc > .QS5gu').click();
    cy.get('.gLFyf').type('ziarul financiar').type('{enter}');
    cy.get('#result-stats').should('exist');
})
it('should be able to filter results by time', () => {
    cy.get('#W0wltc > .QS5gu').click();
    cy.get('input[name="q"]').type('Cypress');
    cy.get('form').submit();
    cy.contains('Tools').click();
    cy.get('#hdtbMenus').then(($el) => {
        $el.css('display', 'block')
    })
    cy.get('#tn_1').should('exist');
    cy.contains('Any time').click({force: true});
    cy.get('.y0fQ9c > span').contains('Custom range').click();
    cy.get('.goog-date-picker-head > [colspan="2"]').click();
    cy.get('#OouJcb').type('12/31/2022');
    cy.get('#rzG2be').type('01/21/2023');
    cy.contains('Go').click();
    cy.get('div div div div.KTBKoe').eq(0).should('have.text', 'Dec 31, 2022 – Jan 21, 2023');   
})
})

