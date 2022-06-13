const internetPage = require("../pageobjects/internet.page");

 internetPage = require("../pageobjects/internet.page");


 describe('Drag and Drop', function (){
     it('Should drag column a to column b', async ()=>{
        await  browser.url('/drag_and_drop');
        await internetPage.dragColumnAToColumnB();
        assert.equal('A',)
     })
 })