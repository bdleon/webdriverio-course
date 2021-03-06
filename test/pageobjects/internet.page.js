class Internet {

    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    get firstLink() { return $('ul li:nth-child(1) a') }
    link(index) { return $(`ul li:nth-child(${index}) a`) }
    checkBoxes(index) { return $(`#checkboxes input:nth-child(${index})`) }
    get username() { return $('#username') }
    get password() { return $('#password') }
    figure(index) { return $(`.example .figure:nth-child(${index}) img`) }
    figureDetail(index) { return $(`.example .figure:nth-child(${index}) .figcaption h5`) }
    get target() { return $('.example #target') }
    get result() { return $('#result') }

    get hereLink() { return $('.example a') }

    get iframeBody() { return $('#tinymce') }
    get iframe() { return $('.tox-edit-area #mce_0_ifr') }

    get columnA() { return $('#column-a') };
    get columnB() { return $('#column-b') };
    get columnAHeader() { return $('#column-a header') }
    get columnBHeader() { return $('#column-b header') }
    get dropdownMenu() { return $('#dropdown') }
    get dropdownMenuOpton1() { return $('#dropdown option:nth-child(2)') }
    get dropdownMenuOpton2() { return $('#dropdown option:nth-child(3)') }
    javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`) }
    get enableButton() { return $('.example #input-example button') }
    get inputEnableField() { return $('.example #input-example input') }
    get exampleButton() { return $('.example button') }
    deleteButton(index) { return $(`#elements button:nth-child(${index})`) }

    get pageButton(){ return $('#checkbox-example button')}

    async clickPageButton(){
        await this.pageButton.waitForDisplayed()
        await this.pageButton.click()
    }

    async clickExampleButton() {
        await this.exampleButton.waitForDisplayed()
        await this.exampleButton.click()
    }

    async clickDeleteButton(index){
        await this.deleteButton(index).waitForDisplayed()
        await this.deleteButton(index).click()
    }

    /**
     * Clicks the Enable/Disable button
     */
    async clickEnableButton() {
        await this.enableButton.waitForDisplayed()
        await this.enableButton.click()
    }
    /**
     * Click the specified javascript alert button
     * @param {Number} index the index of the element
     */
    async clickJavascriptAlertButton(index) {
        await this.javascriptAlertButton(index).waitForDisplayed();
        await this.javascriptAlertButton(index).click();
    }

    /**
     * clicks on dropdown menu
     */
    async clickDropDownMenu() {
        await this.dropdownMenu.waitForDisplayed();
        await this.dropdownMenu.click();
    }
    /**
     * Click on first option in dropdown
     */
    async clickDropdownMenuOpton1() {
        await this.dropdownMenuOpton1.waitForDisplayed();
        await this.dropdownMenuOpton1.click();
    }
    /**
     * Clicks on second option in dropdown
     */
    async clickDropdownMenuOpton2() {
        await this.dropdownMenuOpton2.waitForDisplayed();
        await this.dropdownMenuOpton2.click();
    }
    /**
     * Drags column b to column a
     */

    async dragColumnAToColumnB() {
        await this.columnA.waitForDisplayed();
        await this.columnA.dragAndDrop(await this.columnB);
    }
    /**
     * Enter the text in the iframe
     * @param {String} text text to be entered
     */
    async sendTextToBody(text) {
        await this.iframeBody.waitForDisplayed();
        await this.iframeBody.clearValue();
        await this.iframeBody.click();
        await this.iframeBody.keys(text);
    }

    /**
     * Click the "click here" link
     */
    async clickHereLink() {
        await this.hereLink.waitForDisplayed();
        await this.hereLink.click();

    }

    /**
     * Scrolls to page footer
     */
    async scrollToPageFooter() {
        await this.pageFooter.moveTo()
    }
    /**
     * Clicks the target input field
     */
    async clickTarget() {
        await this.target.waitForDisplayed()
        await this.target.click()
    }
    /**
     * 
     * send keys to target
     */
    async sendKeysToTarget(text) {
        await this.target.waitForDisplayed()
        await this.target.keys(text)

    }
    /**
     * 
     * @returns The text of the return element 
     */
    async getResutsText() {
        await this.result.waitForDisplayed()
        return this.result.getText()
    }

    /**
     * Hover of the figure
     * @param {Number} index The specified index of the image
     */
    async hoverOverFigure(index) {
        await this.figure(index).waitForDisplayed()
        await this.figure(index).moveTo(1, 1);

    }

    /**
     * This method will return the text of the figure details
     * @param {Number} index The specified index of the figcaption detail
     */
    async getFigureDetailsText(index) {
        await this.figureDetail(index).waitForDisplayed()
        return await this.figureDetail(index).getText()

    }

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
    async clickLink(index) {
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