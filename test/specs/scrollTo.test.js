const { assert } = require("chai");



 internetPage = require("../pageobjects/internet.page");

describe('scroll to element', function(){
    it.skip('should scroll to the footer', async ()=>{
        await browser.url('/');
        await internetPage.pageHeader.waitForDisplayed();
        await internetPage.scrollToPageFooter();
        await browser.pause(3000);
        // assert.equal(true, await internetPage.pageFooter.isDisplayedInViewport())
    })
    it('should scroll into view', async ()=>{
        await browser.url('/');
        await internetPage.pageHeader.waitForDisplayed();
        await internetPage.pageFooter.scrollIntoView();
     
        assert.equal(true, await internetPage.pageFooter.isDisplayedInViewport())
    })
})