module.exports = {
    "@tags": ["google"],
    "Google Advanced Search using Page Object Model: Elon Musk"(browser) {
    
    const mainQuery = "Elon Musk";
    const page = browser.page.googleAdvancedSearch();

    page.
        navigate()
        .setQuery(mainQuery)
        .selectFilter('@languageDropDown', 'lang_it')
        .selectFilter('@lastUpdateDropDown', 'm')
        .search();

    browser
        .assert.urlContains("as_q=Elon+Musk", "Param: Query is Elon Musk")
        .assert.urlContains("lr=lang_it", "Param: Language is Italian")
        .assert.urlContains("as_qdr=m", "Param: Time Period is last month")

}
};
