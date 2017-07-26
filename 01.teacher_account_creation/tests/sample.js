module.exports = {


    'THEN My email is verified': function (client) {
        var URL1 = 'https://www.mailinator.com/';
        var email = 'fr009@mailinator.com';
        var WINDOW1 = 'wMail';

        //Opens new window
        client
        .execute(function (url1, window1) {
            window.open(url1, window1, "height=1024,width=768");
        }, [URL1, WINDOW1])

        //Focus on the new window, without this the driver gets lost in the wrong one and won't find the elements
        .switchWindow(WINDOW1)
        .waitForElementVisible('body', 2000)
        .verify.title('Mailinator')
        .setValue('#inboxfield', email)
        .click('button.btn.btn-dark')
        .waitForElementVisible('body',3000)
        // .verify.visible('#query_data > div:nth-child(4)')
        .verify.containsText('#query_data > div:nth-child(4)',email)
        .click('.all_message-min')
        .frame('msg_body')
            .click('.front-row-h2b-button')
        .frame(null)

            // .useXpath() // every selector now must be XPath
            // .click('//a[text()="Confirm Account"]') 
            // .useCss()      // we're back to CSS now


        
    },
};