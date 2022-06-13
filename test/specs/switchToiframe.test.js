
 internetPage = require("../pageobjects/internet.page");


describe('Should switch to iframe', function(){
    it('should switch to iframe', async ()=>{
        await browser.url('/iframe');
        await internetPage.h3Header.waitForDisplayed();
        await internetPage.iframe.waitForDisplayed();
        await browser.switchToFrame(await internetPage.iframe);
        await internetPage.sendTextToBody('This is the text in the iframe body');
        await browser.pause(3000)
        assert.equal('This is the text in the iframe body', await internetPage.iframeBody.getText());
    })
})