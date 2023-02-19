
/// <reference types="cypress" />


describe('eCommerce E2E exercise', () => {

    it('should successfully select the desired product and get to product page', () => {
        cy.visit('https://www.ebay.com')
        cy.get('li.hl-cat-nav__js-tab:nth-child(3)').click()
        cy.url().should('include','Electronics')
        cy.get('ul li.b-links-accordion:nth-child(3)').click()
        cy.get('ul li a[href="https://www.ebay.com/b/Computer-Software/18793/bn_745175"]').click()
        cy.url().should('include','Computer-Software')
        cy.get('ul li a[href="https://www.ebay.com/b/Antivirus-Security-Software/175689/bn_738281"]').eq(0).click()      
        cy.get('span.b-pageheader__text').should('have.text','Antivirus & Security Software')
        cy.get('button.btn.btn--small').eq(1).click()
        cy.get('form div.x-overlay__container').click().then(function(form)
        {
            expect(form).to.be.visible
        })
        var item = cy.get('div.x-overlay-sub-panel__aspect-options-list')  
        item.contains('macOS 10.12').then(function($el)    
        {
            cy.wrap($el).click()
        })
        cy.get('button[aria-label="Apply"]').click()
        cy.get('.x-flyout__button').eq(2).click().then(function(dropdown)
        {
            cy.wrap(dropdown).should('have.attr','aria-expanded','true')
        })
        cy.contains('BitDefender').click()
        cy.get('.s-item__title').each((el,index) => {
            const productName = el.text()
            if (productName === 'Bitdefender Premium VPN 2023 UNLIMITED 10 devices 1 year Win PC Mac Android iOS')
            {
                const desiredProduct = cy.get('a.s-item__link').eq(index)
                desiredProduct.invoke('removeAttr','target')
                //desiredProduct.click()
                desiredProduct.invoke('prop','href').then(function(url){
                    cy.log(url)
                    expect(url).to.equal('https://www.ebay.com/itm/124722064324?hash=item1d0a03abc4:g:s98AAOSwaBZhJcJ1')
                    //cy.pause()
                    //cy.visit(url)
                })
            }
        })
    })
})
