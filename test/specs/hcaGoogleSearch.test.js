 googlePage = require("../pageobjects/google.page");

describe('Hca Google search', function (){
    it('The official HCA Healthcare website is returned within the first three returned results', async ()=>{
        await browser.url('https://google.com/')
    })
})