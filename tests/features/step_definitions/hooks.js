var {After, Before} = require('cucumber');
const fs = require('fs');
let scenarioName;


Before(function (scenario) {
    scenarioName = scenario.pickle.name;
    scenarioName = scenarioName.replace(/ /g, "_");
    let folderName = `tests/reports/Evidence/${scenarioName}_${Date.now()}`;
    fs.mkdirSync(folderName);
});

After(function (scenario) {

    console.log(`status is  ${scenario.result.status}`);
    if (scenario.result.status != 'passed') {
        browser.saveScreenshot(`tests/reports/Evidence/${scenarioName}_Error_${Date.now()}.png`);
    }


});


