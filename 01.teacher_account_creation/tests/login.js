module.exports = {

  '@tags': ['signup'],
  'I am in the Front Row page': function (client) {
    var data = client.globals;

    client
      //GIVEN I am in the Front Row page
      
      .url(data.urls.login)
      .waitForElementVisible('body', 1000)
      .assert.title('Front Row Education | Reach Every Student at Their Level')

      // .end();  
  },

  '@tags': ['signup'],
  'WHEN I signup using valid NOT google credentials': function (client) {
    var data = client.globals;
    

    client
      //WHEN I signup using valid NOT google credentials
      .click('body > div.wrap > section.hero > div > div > div.hero_mainCol > div.hero_button > a')
      .waitForElementVisible('body', 5000)
      .waitForElementVisible('#first-name', 2000)
      .assert.title('Front Row Teacher Dashboard')
      .setValue('#first-name', data.name)
      .setValue('#last-name', data.lastName)
      .setValue('#email', data.email)
      .setValue('#email-confirmation', data.email)
      .setValue('#password', data.pwd)
      .setValue('#password-confirmation', data.pwd)
      .click('.btn-fr')
      .waitForElementVisible('.introduction-panel-title', 5000)
      .verify.containsText('.introduction-panel-title', 'Introduction to Front Row')
      .pause(3000)
      // .end();//
     
  },

  '@tags': ['email'],
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
      .waitForElementVisible('body',2000)
      .waitForElementVisible('#query_data > div:nth-child(4)',2000)
      .verify.containsText('#query_data > div:nth-child(4)', data.email)
      .useXpath() // every selector now must be XPath
        .click('//div[contains(.,"Your Front Row teacher account is almost ready")]//*[@class="all_message-min_text all_message-min_text-3"]')
      .useCss()      // we're back to CSS now
      
      //clicking Confirm Account button inside the email's iframe
      .frame('msg_body')
        .waitForElementVisible('.front-row-h2b-button',3000)

        // open new window button
        .verify.visible('.front-row-h2b-button')
        .getAttribute('.front-row-h2b-button', 'href', function (link) {
        newWindowUrl = link.value;
        })
        .click('.front-row-h2b-button')
        .windowHandles(function(result) {
            var newWindow;
            this.verify.equal(result.value.length, 3, 'There should be 3 windows open');
            newWindow = result.value[2];
            this.switchWindow(newWindow);
            this.verify.containsText('body > h1','Email Validated!')
            this.waitForElementVisible('#environment',15000)
            this.click('#environment option[value="us_in_school"]')
            this.verify.visible('#zip')
            this.setValue('#zip','94103')
            this.waitForElementVisible('#schoolInput option[value="131748"]',2000)
            this.click('#schoolInput option[value="131748"]')
            var teacher = 'body > div:nth-child(22) > div > div.fade.in.modal > div > div > div.modal-body > form > div:nth-child(3) > div:nth-child(2) > select > option[value="teacher"]'
            this.click(teacher)
            this.click('#acknowledge')
            this.click('.btn-fr.btn-fr-primary-info.btn-block.chunky-button')
            this.verify.containsText('.page-title','Roster')
        })

        
      .frame(null)
      // .waitForElementVisible('body',1000)
      // .verify.containsText('body > h1','Email Validated!')
      // .useXpath() // every selector now must be XPath
      //   .waitForElementVisible('//input[@name="email"]')
      //   .verify.visible('//input[@name="email"]')
      // .useCss()      // we're back to CSS now

      // body > div:nth-child(19) > div > div.fade.in.modal > div > div > div.modal-body > form > div:nth-child(3) > div:nth-child(2) > select
      // /html/body/div[5]/div/div[2]/div/div/div[2]/form/div[3]/div[2]/select


    // client
    //   .perform(function (client, done) {
    //     console.log('All done!');
    //     alert('All done!');
        
    //   });
      
  
  
  }

};