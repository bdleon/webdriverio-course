

 googlePage = require("../pageobjects/google.page");


describe('Google Search', function (){
    it('Verify submitting a search term return result', async ()=>{
        await browser.url('https://www.google.com/');
        await googlePage.enterSearchTerm('test')
        await googlePage.clickGoogleSearchButton()
        assert(await googlePage.childSearchResult.length > 0,'No search results returned');
    })

    // it('Verify submitting a search term returns results', async ()=>{
    //     console.log('Number of return results',await googlePage.childSearchResult.length)
    //     assert(await googlePage.childSearchResult.length > 0,'No search results returned');
    // })

    it('Verify that “News” filter option is present on the results page', async ()=>{
        await browser.pause()
        await googlePage.searchResultsNavigation.waitForDisplayed();
        assert.equal('News', await googlePage.searchResultsNavigationItem(3).getText(),'index did not equal News')
    })
})