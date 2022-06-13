

internetPage = require("../pageobjects/internet.page");

describe('Switch Window', function () {
    it('Should switch to the next window', async () => {
        await browser.url('/windows');
        await internetPage.clickHereLink();
        await browser.switchWindow('/windows/new');
        assert.equal(true, await internetPage.h3Header.isExisting())
        assert.equal(true, await internetPage.h3Header.isDisplayed())
        assert.equal('New Window', await internetPage.h3Header.getText())
    })
})