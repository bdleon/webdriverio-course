

class Internet {

    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }

    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    get firstLink() { return $('ul li:nth-child(1) a')}

    async getLiText() {
        await this.childElements.filter((e) => {

            console.log('this is the result in line 13: ', e)
            console.log(e.getText())
        })
    }

    async getSpecificElementText(index) {
        console.log(await this.specificChildElement(index).getText())

    }

    async clickOnLink() {
       if( await this.firstLink.isDisplayed()=== true){
           await this.firstLink.click()
       }
       browser.pause(50000)

    }

}
module.exports = new Internet()