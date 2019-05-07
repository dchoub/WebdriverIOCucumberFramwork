/**
 * Created by dhwchoub on 5/5/2019.
 */
/**
 * Created by dhwchoub on 5/4/2019.
 */
let {Given, When,Then} = require('cucumber');
const landingPage = require('../../../tests/pages/webdriverIO/landing.page.js');
const landing = new landingPage();
const getStartedPage = require('../../pages/webdriverIO/getStarted.page.js');
const getStarted = new getStartedPage();


Given(/^I am on the webdriverIO homepage$/, function () {
    landing.openWebPage();

});

When(/^I search for the Get Started keyword$/, function () {
    landing.clickGetStarted();
});


Then(/^I should get redirected to the Get Started Page$/, function () {
    getStarted.VerifyGetStartedtpage();
});






