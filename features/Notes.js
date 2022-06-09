/* 
Recommended Packages 
====================
cypress
cypress-cucumber-preprocessor
cypress-axe + axe-core

eslint 
husky (pre-commit hooks)
prettier

Cypress.json config settings
============================

{
    "testFiles": "** /*.feature",
    "integrationFolder": "features",
    "pluginsFile":"plugins/index.js",
    "fileServerFolder": ".",
    "nodeVersion": "system",
    "supportFile": false,
    "fixturesFolder": false,
    "chromeWebSecurity": false,
    "env": {
        "Local": false,
        "Mock": false,
        "TAGS": "not @ignore"
    },
    "video": false,
    "retries": {
        "runMode": 1,
        "openMode": 1
    }

}

config.js
=========
Contains env variables. E.g.
module.exports = {
    localURL: "...",
    otherURL: "..."
}
users and timeouts

.gitignore
==========
cypress/
node_modules/

.eslintrc
=========
code rules

Test Function Structure
=======================

Feature File => Step Definitions
Step Definitions => POM Functions File(s)                 
                 => Common Helper 'Steps' File
                 => Data JSON
                 => Utilities

Working with Data / Example Tables - Step Definition
====================================================

Iterate through Data Table:
When("...", (datatable) => {
const input = datatable.hashes();
    input.map((section) => {
    somePOM.someGetWebElement(section.someDataTableValue).someAction();
    })
})

Switch Case Example Table:

When("...{string}", (action) => {
    switch (action){
        case "action1":
            somePOM.someGetWebElement().click();
        case "action2":
            somePOM.someGetWebElement().click();
            break;
        default:
            break;
    }
})

Cypress with APIs/Endpoints
===========================

cy.request({method,url,headers,body}).then((response)=>{Action Response}) = Make HTTP request

cy.intercept() = Spy, Stub, Alias to action (wait.then), mod status code

Spy:
cy.intercept(url)

Alias:
cy.intercept(url, (req) => {...}).as('someAlias')
cy.wait('@someAlias').then((interception) => {...})

Stub:
const object = {...}
cy.intercept('POST','/api/submit', object)

Status Code:
cy.intercept("GET", "/api", { statusCode: 503})

Spy



*/