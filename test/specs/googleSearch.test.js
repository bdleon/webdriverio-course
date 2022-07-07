

 googlePage = require("../pageobjects/google.page");


describe('Google Search', function (){
    it('Verify submitting a search term returns results', async ()=>{
        await browser.url('https://www.google.com/');
        await googlePage.enterSearchTerm('test')
        await googlePage.clickGoogleSearchButton()
        
    })

    it('')
})