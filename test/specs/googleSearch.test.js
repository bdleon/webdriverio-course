

 googlePage = require("../pageobjects/google.page");


describe('Google Search', function (){
    it('Verify submitting a search term ', async ()=>{
        await browser.url('https://www.google.com/');
        await googlePage.enterSearchTerm('test')
        await googlePage.clickGoogleSearchButton()
        
    })

    it('Verify submitting a search term returns results', async ()=>{
        console.log('Number of return results',await googlePage.childSearchResult.length)
        assert(await googlePage.childSearchResult.length > 0,'No search results returned');
    })
})