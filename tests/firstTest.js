module.exports  = {
    'my first test case' : function(browser){
        browser
        .url('https://news.ycombinator.com/')
        .waitForElementVisible('.hnname')
        .assert.containsText(".hnname", "Hacker News");
    }
}