module.exports = {
  "@tags": ["google"],
  "Google Advanced Search: Elon Musk"(browser) {
    const mainQueryInputSelector = 'input[name="as_q"]';
    const mainQuery = "Elon Musk";
    const languageDropDownOpenerSelector = "#lr_button";
    const languageDropDownValueSelector = '.goog-menuitem[value="lang_it"]';
    const lastUpdateDropDownOpenerSelector = "#as_qdr_button";
    const lastUpdateDropDownValueSelector = '.goog-menuitem[value="m"]';
    const submitButtonSelector = '.jfk-button[type="submit"]';
    const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
    const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]';
    const resultsPageLastUpdateSelector = '[aria-label="Past month"]';
    

    browser
      .url("https://www.google.com/advanced_search")
      .setValue(mainQueryInputSelector, mainQuery)
      .click(languageDropDownOpenerSelector)
      .click(languageDropDownValueSelector)
      .click(lastUpdateDropDownOpenerSelector)
      .click(lastUpdateDropDownValueSelector)
    //   .perform(() => { debugger; })
      .click(submitButtonSelector)
      .assert.urlContains("as_q=Elon+Musk", "Param: Query is Elon Musk")
      .assert.urlContains("lr=lang_it", "Param: Language is Italian")
      .assert.urlContains("as_qdr=m", "Param: Time Period is last month")
      .assert.visible(
        resultsPageQuerySelector,
        "UI: Elon Musk is set in the query input"
      )
    //   .assert.containsText(
    //     resultsPageLanguageSelector,'Search Italian pages',
    //     "UI: Language is set to Italian"
    //   )
    //   .assert.containsText(
    //     resultsPageLastUpdateSelector,'Past month',
    //     "UI: Last update set to past month"
    //   )
      .saveScreenshot("tests_output/google.png");
  },
};
