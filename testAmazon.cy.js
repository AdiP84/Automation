describe('E-commerce: Amazon', () => {
    it('should show an error message when invalid credentials are entered', () => {
        cy.visit('https://www.amazon.com');
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type('abc@email.com');
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type('wrongpassword');
        cy.get('#signInSubmit').click();
        cy.get('#auth-warning-message-box > .a-box-inner').should('be.visible');
    })    
    it ('should add items to the cart and proceed to checkout', () => {
        cy.visit('https://www.amazon.com');
        cy.get('#twotabsearchtextbox').type('ebook reader').type('{enter}');
        const item = cy.get('[data-asin="B08VJK1Y1Q"]').contains('Pocketbook InkPad Color');
        item.scrollIntoView();
        item.click();
        cy.get('#add-to-cart-button').click();
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
        cy.url().should('include', 'amazon_checkout_');
    })
})