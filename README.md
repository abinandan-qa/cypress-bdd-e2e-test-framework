# cypress-starter
1. [Introduction](#introduction)
   - [Getting started](#getting-started)
2. [Cucumber Integration](#cucumber-integration)
3. [Tagging tests](#tagging-tests)
4. [Reporting](#reporting)
   - [Mochaawesome Report](#added-support-for-mochaawesome-reports-with-embedded-screenshots--videos-in-case-of-failure)
   - [Allure Report](#added-support-for-allure-reports)
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
![Tagging scenarios](README_images/Tagging_Scenarios.png?raw=true "Tagging Scenarios")

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

### Added support for mochaawesome reports with embedded screenshots & videos in case of failure.
![Failure Report Page 1](README_images/FailureReport_Image1.png?raw=true "Failure Report Page 1")
![Failure Report Page 2](README_images/FailureReport_Image2.png?raw=true "Failure Report Page 2")

### Added support for allure reports
As opening allure reports needs a server, you need to open it using allure commandline (Go to your project root to run allure open command)
In local, execution the reports will be generated in allure-report folder at root level. To open it, run allure open command.
```
npx allure open allure-report
```
In pipeline, allure-report artifact will be pusblished. To open it, download and extract the zip and run allure open command.
```
npx allure open '/Users/jaishreepatidar/Downloads/allure-report'
```

# CI Integration

## GitHub Actions
![Test workflow](https://github.com/twCatalyst/cypress-starter/actions/workflows/ci.yml/badge.svg)

Created pipeline in github actions
- Running eslint in pipeline
- To execute cypress test
- Publish report as artifacts (both Mochaawesome & Allure report)

![Report Artifact](README_images/GitHub_Actions_Artifact.png?raw=true "Report Artifact")

## Useful Links

- [Writing Your First Test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)
- [Example Recipies](https://github.com/cypress-io/cypress-example-recipes)