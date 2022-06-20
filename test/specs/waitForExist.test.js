

 internetPage = require("../pageobjects/internet.page");

 describe('wait for exist', function(){
     it('should should wait for delete button to exist', async ()=>{
         await browser.url('/add_remove_elements/');
         await internetPage.clickExampleButton();
         await internetPage.deleteButton(1).waitForExist()
         assert.equal(true, await internetPage.deleteButton(1).isExisting())

     })

     it('should wait for the delete button to not exist', async ()=>{
         await internetPage.deleteButton(1).waitForExist();
         await internetPage.clickDeleteButton(1);
         assert.equal(false, await internetPage.deleteButton(1).isExisting())
     })
 })