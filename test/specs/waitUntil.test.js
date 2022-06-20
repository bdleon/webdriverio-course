


internetPage = require("../pageobjects/internet.page");

describe('WaitUntil', function(){
    it('Should wait until button text changes', async ()=>{
        await browser.url('/dynamic_controls');
        await internetPage.clickPageButton();
        await browser.waitUntil(async ()=>{
            return await internetPage.pageButton.getText() === "Add"
        }, 6000,'expect button text to change')
    })
})
