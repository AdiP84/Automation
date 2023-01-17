describe ('On linkedin', () => {
    it ('check if the title of the webpage is correct', () => {
        cy.visit('https://linkedin.com');
        cy.title().should('include', 'Log In or Sign Up');
    })
    it('find the "Sign in with Google" button', () => {
        cy.visit('https://linkedin.com');
        cy.get('.google-sign-in-cta__button').should('be.visible');
        cy.get('.google-sign-in-cta__button').click();
        cy.url().should('include', 'linkedin.com');
    })
    it ('verify if user can login', () => {
        cy.visit('https://linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('adiper84@gmail.com');
        cy.get('#password').type('cannotShowMyPasswordHere');
        cy.get('.btn__primary--large').click();
        cy.get('#ember16').should('exist');
    })
})