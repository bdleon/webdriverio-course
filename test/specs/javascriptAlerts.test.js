internetPage = require("../pageobjects/internet.page");

describe('Javascript Alerts', function () {
    it('Should get text of alert', async () => {
        await browser.url('/javascript_alerts');
        await internetPage.clickJavascriptAlertButton(1);
        assert.equal('I am a JS Alert', await browser.getAlertText())



    })

    it('should accept alert', async () => {
        await browser.acceptAlert();
       

    })
})

