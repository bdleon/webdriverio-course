

 internetPage = require("../pageobjects/internet.page");

describe('WebdriverIO API Actions', function (){
    it('Should hover on figure', async () => {
        await browser.url("/hovers");
        await internetPage.hoverOverFigure(3);
        assert.equal("name: user1", await internetPage.getFigureDetailsText(3),"Did not match figure text");
        
    })
})