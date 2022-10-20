// **Automation Test Suite_eMag website** // 

 
 -----------------------------------------------------------------
 
 
 describe ('eMag.ro', () => {


    it ('should have the correct page title', async () => {
        await browser.url('https://www.emag.ro');
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
    });

    it ('should contain a cart button', async () => {
        const cartButton = await $('#my_cart');
        await expect(cartButton).toBeDisplayed();
    });

    it('should open eMag Genius page', async () => {
        const geniusButton = await $('[title="Genius"]');
        await geniusButton.click(); 
        await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');

    });

    it ('should have a functional search', async () => { 
        const searchBox = await $('#searchboxTrigger');
        const searchButton = await $('.searchbox-submit-button');

        await searchBox.setValue ('Samsung Galaxy');
        await searchButton.click();
        await expect(browser).toHaveTitle('Cauți Samsung Galaxy? Alege din oferta eMAG.ro');

    });

    it ('should open login to my account page', async () => {
        const loginToMyAccountButton = await $('#my_account');
        await loginToMyAccountButton.click();
        await expect(browser).toHaveTitle('eMAG.ro - Libertate în fiecare zi');


    });


});


