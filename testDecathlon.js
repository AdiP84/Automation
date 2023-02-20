/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('eCommerce website complex E2E exercise', () => {
    it('should add the products to cart and compare sum of products in the cart with actual total amount', () => {
        cy.visit('https://www.decathlon.ro/')
        cy.wait(2000)
        cy.get('#didomi-notice-agree-button').click()
        cy.get('input[type="search"]').type('Bicicleta MTB Negru {enter}')
        cy.get('a.vtmn-block').each((el, index) => 
        {
            var attribute = el.prop('href')
            if(attribute.includes('carpat-c2041s-20-galben-negru'))
            {
                cy.get('button span.vtmn-truncate').eq(index).click()
            }
        })
        cy.get('.vtmn-typo_text-3.vtmn-my-0').should('have.text','Bicicleta MTB-PLIABILA CARPAT C2041S 20" GALBEN/NEGRU')
        cy.get('.quick-buy-add-to-card > .vtmn-btn').click()
        cy.get('span.count.badge--blue.svelte-v2e9cy').should('be.visible').and('have.text','1')
        cy.get('span.svelte-nm48d0').should('be.visible').and('have.text','(1069 rezultate)')
        cy.get('a.vtmn-block').each((el, index) => 
        {
            var attribute = el.prop('href')
            if(attribute.includes('omega-bikes/bicicleta-mountainbike-omega-thomas-29-2022-cadru-49cm-negru-portocaliu-alb'))
            {
                cy.get('button span.vtmn-truncate').eq(index).click()
            }
        })
        cy.get('.vtmn-typo_text-3.vtmn-my-0').should('have.text','Bicicleta mountainbike Omega Thomas 29" 2022 , cadru 49cm, negru/portocaliu/alb')
        cy.get('.quick-buy-add-to-card > .vtmn-btn').click()
        cy.get('span.count.badge--blue.svelte-v2e9cy').should('be.visible').and('have.text','2')
        cy.get('.cart-button').click()
        var sum = 0
        cy.get('div.price.svelte-gliu3n').each((el, index, list) => {
            const amount = el.text()
            var result = amount.split(' ')
            var newResult = result[0]
            var newResult = parseFloat(newResult)            
            const finalResult = Math.floor(newResult * 1000)
            sum = Number(sum) + Number(finalResult)
        }).then(function(){
            cy.log(sum)
        })
        //cy.pause()
        cy.get('span.vtmn-font-bold.vtmn-typo_text-1:nth-child(2)').eq(0).then(function($el){
            var totalAmount = $el.text()
            var totalResult = totalAmount.split(' ')
            var totalResult = totalResult[0]
            var totalResult = parseFloat(totalResult)
            var totalResult = Math.floor(totalResult * 1000)
            cy.log(totalResult)
            expect(Number(totalResult)).to.equal(sum)
        })
        cy.get('button.vtmn-btn.vtmn-btn_variant--conversion').click() // proceed to checkout

        //parseFloat()
        //3.348 00 LEI
    })    
})