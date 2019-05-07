/**
 * Created by dhwchoub on 5/5/2019.
 */
const NativePage = require('../native.page.js');
const landingLoc = require('../../locators/landing.locators.js')


class landing extends NativePage {

    openWebPage(){
        browser.url('http://v4.webdriver.io');
    };

    clickGetStarted(){
        browser.click(landingLoc.getStartedBTN);
    };


}

module.exports = landing;
