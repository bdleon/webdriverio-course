
 internetPage = require("../pageobjects/internet.page");

 describe('dropdown menu', function(){
    it('should select option 1', async ()=>{
        await browser.url('/dropdown');
        await internetPage.clickDropDownMenu();
        await internetPage.clickDropdownMenuOpton1();
        assert.equal(true,await internetPage.dropdownMenuOpton1.isSelected())
    })
    it('should select option 2', async ()=>{
        await browser.url('/dropdown');
        await internetPage.clickDropDownMenu();
        await internetPage.clickDropdownMenuOpton2();
        assert.equal(true,await internetPage.dropdownMenuOpton2.isSelected())
    })
 })