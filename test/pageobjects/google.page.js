

class Google{

get searchInput(){ return $('input.gLFyf.gsfi')}
get googleSearchButton() { return $(".CqAVzb input.gNO89b")}
get parentSearchResult(){ return $('#search')}
get childSearchResult(){ return this.parentSearchResult.$$('#search .g.Ww4FFb')}
get searchResultsNavigation(){ return $('#hdtb')}
searchResultsNavigationItem(index){ return $(`#hdtb .hdtb-mitem:nth-child(${index})`)}
get googleLogo(){ return $("img[alt='Google']")}
/**
 * Enters a string  of text in the input field
 * @param {String} text for search term
 */
async enterSearchTerm (text){
    await this.searchInput.waitForDisplayed();
    await this.searchInput.click();
    await this.searchInput.setValue(text)
}

async clickGoogleSearchButton(){
    await this.googleSearchButton.waitForDisplayed()
    await this.googleSearchButton.click()
}

async clickGoogleLogo(){
    await this.googleLogo.waitForDisplayed()
    await this.googleLogo.click()
}
}
module.exports = new Google()