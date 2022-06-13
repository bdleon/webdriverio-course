internetPage = require("../pageobjects/internet.page");

describe('Javascript Alerts', function () {
    it('Should get text of alert', async () => {
        await browser.url('/javascript_alerts');
        await internetPage.clickJavascriptAlertButton(1);
        assert.equal('I am a JS Alert', await browser.getAlertText());
    })

    it('should accept alert', async () => {
        await browser.acceptAlert();
        assert.equal('You successfully clicked an alert', await internetPage.getResutsText());
       

    })
    it('should dismiss alert', async ()=>{
        await internetPage.clickJavascriptAlertButton(2);
        await browser.dismissAlert();
        assert.equal('You clicked: Cancel', await internetPage.getResutsText());

    })

    it('Should send text to alert', async ()=>{
        await internetPage.clickJavascriptAlertButton(3);
        await browser.sendAlertText('This is some text');
        await browser.acceptAlert();
        assert.equal('You entered: This is some text', await internetPage.getResutsText())
    })
})

