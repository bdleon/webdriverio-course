

class Google{

get searchInput(){ return $('input.gLFyf.gsfi')}
get googleSearchButton() { return $(".CqAVzb input.gNO89b")}
get parentSearchResult(){ return $('#search')}
get childSearchResult(){ return this.parentSearchResult.$$('#search .g.Ww4FFb')}// maybe change to 
get childSearchResultsLink(){ return this.parentSearchResult.$$('#search .yuRUbf a')}// maybe change to 
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
s
async clickGoogleSearchButton(){
    await this.googleSearchButton.waitForDisplayed()
    await this.googleSearchButton.click()
}

async clickGoogleLogo(){
    await this.googleLogo.waitForDisplayed()
    await this.googleLogo.click()
}

async checkSearchReturnHcaLinks(){
    const homepageUrl = 'https://hcahealthcare.com/'
   
//    const hcaLinks = await this.childSearchResultsLink.some( async childResultLink =>{
   
//       if( childResultLink.getAttribute('href') === homepageUrl){
//          console.log('hca is found in first page')
//          return true
//       }
//     })
//     return await hcaLinks
const hcaLinks = (links)=>links.getAttribute('href') === homepageUrl
await this.childSearchResultsLink.some(hcaLinks)
}
//await this.childSearchResultsLink.getAttribute('href').includes(homepageUrl)
}

module.exports = new Google()