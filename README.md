# Introduction

E2E Tests developed with Cypress framework developed in a BDD approach using Cucumber.

## S/W Dependencies

Node JS and NPM [Latest stable version preferred]

## Getting started

Clone this repository and install the dependencies using following command
```
npm install
```

Running all tests on local:
```
npm run test-local
```

Running Cucumber BDD E2E UI test headed mode using Chrome
```
npm run cy:cucumber:ui:test 
```

# Cucumber Integration
Cucumber Integration using @badeball/cypress-cucumber-preprocessor 
https://github.com/badeball/cypress-cucumber-preprocessor

Running a UI test with Cucumber
```
npm run cy:cucumber:ui:demo:test
```

# Tagging Tests
Add required tags to Scenario or Feature level (For example - @Regression in AccessingProduct.feature)

Providing tag to be executed in cypress.config.js (already added in this repo)
```
 env: {
    tags: "@Regression"
  },
```
OR 
Pass the tags in CLI (can be leveraged for configuring different tags based on CI pipeline)
```
npx cypress run --env tags="@Regression"
OR
npx cypress run --env tags="not @Regression"
```

# Reporting
Consolidated Mocha reports are available in below path 
```
cypress/reports/mochareports/report.html 
```
