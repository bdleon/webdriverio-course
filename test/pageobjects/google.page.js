


class Google{

get searchInput(){ return $('input.gLFyf.gsfi')}
get googleSearchButton() { return $(".CqAVzb input.gNO89b")}
get parentSearchResult(){ return $('#search')}
get childSearchResult(){ return this.parentSearchResult.$$('#search .g.Ww4FFb')}

async enterSearchTerm (text){
    await this.searchInput.waitForDisplayed();
    await this.searchInput.click();
    await this.searchInput.setValue(text)
}

async clickGoogleSearchButton(){
    await this.googleSearchButton.waitForDisplayed()
    await this.googleSearchButton.click()
}
}
module.exports = new Google()