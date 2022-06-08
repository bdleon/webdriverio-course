const internetPage = require('../pageobjects/internet.page')
describe("Interacting with elements", function () {
    it("Get text for element", async () => {
        await browser.url('/');


        let text = await $("#page-footer").getText();
        await console.log(text);
        await internetPage.getLiText();
        await internetPage.getSpecificElementText(3);
    })

    it('Is footer display', async () => {

      console.log( await internetPage.pageFooter.isDisplayed());
    })

    it('Does the header exist', async () => {
      console.log(  await internetPage.pageHeader.isExisting());
    })

    it('Is footer in ViewPort', async () =>{
       console.log(await internetPage.pageFooter.isDisplayedInViewport());
    })

    it('Is Header in ViewPort', async () =>{
       console.log(await internetPage.pageHeader.isDisplayedInViewport());
    })
    it('is subheader enabled ', async () => {
        console.log(await internetPage.subHeading.isEnabled());
    })

    it('click first Link', async()=>{
        console.log(await internetPage.clickOnLink())
        
    })

})
