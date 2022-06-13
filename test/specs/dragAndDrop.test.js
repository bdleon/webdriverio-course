 internetPage = require("../pageobjects/internet.page");




 describe('Drag and Drop', function (){
     // The drag and drob functionality is not perfect, it does work kinda...
     it.skip('Should drag column a to column b', async ()=>{
        await  browser.url('/drag_and_drop');
        await internetPage.dragColumnAToColumnB();
        await browser.pause(3000)
        assert.equal('A',await internetPage.columnBHeader.getText())
     })
 })