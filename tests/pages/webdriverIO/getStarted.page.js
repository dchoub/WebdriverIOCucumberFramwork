/**
 * Created by dhwchoub on 5/6/2019.
 */
const NativePage = require('../native.page.js');
const getStartedLoc = require('../../locators/getStarted.locators.js')

class getStarted extends NativePage {
    VerifyGetStartedtpage(){
        browser.isVisible(getStartedLoc.pageTitle)
    }

}
module.exports = getStarted;

