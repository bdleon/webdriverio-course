


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

    it('Verify that clicking the Google logo on the results page loads the Google search homepage.', async ()=>{
        await browser.pause(2000);
        console.log(await browser.getTitle())
        await googlePage.clickGoogleLogo();
        console.log(await browser.getTitle())
        await browser.switchWindow('https://www.google.com/');
        assert.equal('Google', await browser.getTitle(),'Logo link did not return to the homepage')
        
    })
})