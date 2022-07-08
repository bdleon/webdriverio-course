const googlePage = require("../pageobjects/google.page");

 

describe('Hca Google search', function (){
    it('The official HCA Healthcare website is returned within the first three returned results', async ()=>{
        await browser.url('https://google.com/');
        await googlePage.enterSearchTerm('hca');
        await googlePage.clickGoogleSearchButton();
        console.log('This is the result of the method: ',await googlePage.checkSearchReturnHcaLinks());
        assert.equal(true, await googlePage.checkSearchReturnHcaLinks(),'First page did not contain hca homepage')
    })
})