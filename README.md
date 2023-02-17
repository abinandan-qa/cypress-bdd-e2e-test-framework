# cypress-starter
1. [Introduction](#introduction)
   - [Getting started](#getting-started)
2. [Cucumber Integration](#cucumber-integration)
3. [Tagging tests](#tagging-tests)
4. [Reporting](#reporting)
5. [CI Integration](#ci-integration)
   - [GitHub Actions](#github-actions)
4. Misc
   - [Useful links](#useful-links)

# Introduction

A starter pack for getting started with Cypress framework for your project.
This is a Cypress framework developed in a BDD approach via Cucumber built on Cypress 12.5.1 version.

## Getting started

Clone this repository and install the dependencies using following command
```
npm install
```

Running the test on local:
```
npm run test-local
```

# Cucumber Integration
Cucumber Integration using @badeball/cypress-cucumber-preprocessor 
https://github.com/badeball/cypress-cucumber-preprocessor

# Tagging Tests
Add required tags to Scenario or Feature level (For example - @Regression in PlaceOrder.feature)

Providing tag to be executed in cypress.config.js (already added in this repo)
```
 env: {
    tags: "@Regression"
  },
```
OR 
Pass the tags in CLI (can be leveraged for CI integration)
```
npx cypress run --env tags="@Regression"
OR
npx cypress run --env tags="not @Regression"
```

# Reporting

### Added support for mochaawesome reports with embedded screenshots & videos in case of failure.
![Alt text](README_images/FailureReport_Image1.png?raw=true "Failure Report Page 1")
![Alt text](README_images/FailureReport_Image2.png?raw=true "Failure Report Page 2")

# CI Integration

## GitHub Actions
![Test workflow](https://github.com/twCatalyst/cypress-starter/actions/workflows/ci.yml/badge.svg)

Created pipeline in github actions
- Running eslint in pipeline
- To execute cypress test
- Publish report as artifacts

## Useful Links

- [Writing Your First Test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)
- [Example Recipies](https://github.com/cypress-io/cypress-example-recipes)