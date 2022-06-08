

internetPage = require("../pageobjects/internet.page");

describe("Test element actions", function () {

    it('should click element', async () => {
        await browser.url('/');
        await internetPage.clickOnLink();
        expect(await browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest');
    })
})