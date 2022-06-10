



class Internet {

    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3')}
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    get firstLink() { return $('ul li:nth-child(1) a') }
    link(index) { return $(`ul li:nth-child(${index}) a`)}

    checkBoxes(index) { return $(`#checkboxes input:nth-child(${index})`) }
    get username() { return $('#username') }
    get password() {return $('#password') }
    /**
     * inputs username to the field 
     * @param {string} text username to be entered
     */
    async enterUsername(text) {
        await this.username.waitForDisplayed()
        await this.username.setValue(text)
    }
    /**
     * Inputs password to the input field
     * @param {string} text password to be entered
     */
    async enterPassword(text) {
        await this.password.waitForDisplayed()
        await this.password.setValue(text)
    }

    /**
     * Clicks on the link based on the index provided
     * @param {Number} index the index of the element
     */
    async clickLink(index){
        await this.link(index).waitForDisplayed()
        await this.link(index).click()
    }
    
    async clickCheckBox(index) {
        await this.checkBoxes(index).waitForDisplayed()
        await this.checkBoxes(index).click()
    }

    async getLiText() {
        await this.childElements.filter((e) => {

            console.log('this is the result in line 13: ', e)
            console.log(e.getText())
        })
    }

    async getSpecificElementText(index) {
        await this.specificChildElement(index).waitForDisplayed()
        return await this.specificChildElement(index).getText()

    }

    async clickOnLink() {
        if (await this.firstLink.isDisplayed() === true) {
            await this.firstLink.click()
        }
        await this.h3Header.waitForDisplayed()
    }

}
module.exports = new Internet()