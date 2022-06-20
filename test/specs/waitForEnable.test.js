

 internetPage = require("../pageobjects/internet.page");

describe('Wait for enabled', function(){
    it('Should wait for the input field to be enabled', async () =>{
        await browser.url('/dynamic_controls')
        await internetPage.clickEnableButton();
        await internetPage.inputEnableField.waitForEnabled(4000);
        assert.equal(true, await internetPage.inputEnableField.isEnabled())
    })
    /// Does not seem to be working. will work on later.
    it('Should wait for the input field to be disabled', async () => {
        
        await internetPage.clickEnableButton();
        //await browser.pause(2000)
        await internetPage.inputEnableField.waitForEnabled(4000, true);
        assert.equal(true, await internetPage.inputEnableField.isEnabled())
    })
})