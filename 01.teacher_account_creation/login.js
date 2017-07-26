module.exports = {

  'I am in the Front Row page': function (client) {
    var data = client.globals;

    client
      //GIVEN I am in the Front Row page
      
      .url(data.urls.login)
      .waitForElementVisible('body', 1000)
      .assert.title('Front Row Education | Reach Every Student at Their Level')

      // .end();  
  },

  'WHEN I signup using valid NOT google credentials': function (client) {
    var data = client.globals;

    client
      //WHEN I signup using valid NOT google credentials
      .click('body > div.wrap > section.hero > div > div > div.hero_mainCol > div.hero_button > a')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#first-name', 1000)
      .assert.title('Front Row Teacher Dashboard')
      .setValue('#first-name', data.name)
      .setValue('#last-name', data.lastName)
      .setValue('#email', data.email)
      .setValue('#email-confirmation', data.email)
      .setValue('#password', data.pwd)
      .setValue('#password-confirmation', data.pwd)
      .click('.btn-fr')
      .waitForElementVisible('body', 1000)
      // .pause()
      //.verify.containsText('.introduction-panel-title', 'Introduction to Front Row')
      // .pause()
      // .end();//
     
  },

  'THEN My email is verified': function (client) {
    var data = client.globals;
    var URL1 = data.urls.mailEngine;
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
      .setValue('#inboxfield', data.email)
      .click('button.btn.btn-dark')
      .waitForElementVisible('body',3000)
      .verify.visible('#query_data > div:nth-child(4)')
      .verify.containsText('#query_data > div:nth-child(4)',data.email)
      .click('.all_message-min')
      .waitForElementVisible('.logo',3000)
      .switchWindow(WINDOW1).verify.visible('.logo')
      

      // .useXpath() // every selector now must be XPath
      // .waitForElementVisible('//a[text()="Confirm Account"]',3000)
      // .click('//a[text()="Confirm Account"]') 
      // .useCss()      // we're back to CSS now
      
      
      //div.all_message-min_text 

      //.waitForElementVisible('#msgpane',2000)
      
      // .verify.containsText('#msgpane > div:nth-child(1) > div:nth-child(1)','Your Front Row teacher account is almost ready')
      
      
// body > div > table:nth-child(1) > tbody > tr > td > table.content > tbody > tr > td > table > tbody > tr > td
// /html/body/div/table[1]/tbody/tr/td/table[2]/tbody/tr/td/table/tbody/tr/td

// body > div > table:nth-child(1) > tbody > tr > td > table.content > tbody > tr > td > table > tbody > tr > td > a
// /html/body/div/table[1]/tbody/tr/td/table[2]/tbody/tr/td/table/tbody/tr/td/a

      


    // client
    //   .perform(function (client, done) {
    //     console.log('All done!');
        
    //   });
      
  },
  


};