const { assert } = require("chai");



internetPage = require("../pageobjects/internet.page");

describe('WebdriverIO API Actions', function () {
    it('Should hover on figure 1', async () => {
        await browser.url("/hovers");
        await internetPage.hoverOverFigure(3);
        assert.equal("name: user1", await internetPage.getFigureDetailsText(3), "Did not match figure text");

    })
    it('Should hover on figure 2', async () => {
        await browser.url("/hovers");
        await internetPage.hoverOverFigure(4);
        assert.equal("name: user2", await internetPage.getFigureDetailsText(4), "Did not match figure text");

    })
    it('Should hover on figure 3', async () => {
        await browser.url("/hovers");
        await internetPage.hoverOverFigure(5);
        assert.equal("name: user3", await internetPage.getFigureDetailsText(5), "Did not match figure text");

    })

    it('should send keyboard value', async () => {
        await browser.url('/key_presses');
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget('Backspace')
        assert.equal("You entered: BACK_SPACE", await internetPage.getResutsText())
    })
})