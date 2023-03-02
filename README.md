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
6. [Run tests through Browserstack](#browserstack)
7. [Accessibility](#accessibility)
8. Misc
   - [Useful links](#useful-links)

# Introduction

A starter pack for getting started with Cypress framework for your project.
This is a Cypress framework developed in a BDD approach via Cucumber built on Cypress 12.5.1 version.

## Getting started

Clone this repository and install the dependencies using following command
```
npm install
```

Running the all tests on local:
```
npm run test-local
```

Running a basic UI test
```
npm run cy:basic:ui:demo:test 
```

Running a UI test with Page Object Model
```
npm run cy:pom:ui:demo:test
```

# Cucumber Integration
Cucumber Integration using @badeball/cypress-cucumber-preprocessor 
https://github.com/badeball/cypress-cucumber-preprocessor

Running a UI test with Cucumber
```
npm run cy:cucumber:ui:demo:test
```

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

### Added support for allure reports with history in pipeline
As opening allure reports needs a server, you need to open it using allure commandline (Go to your project root to run allure open command)
In local, execution the reports will be generated in allure-report folder at root level. To open it, run allure open command.
```
npx allure open allure-report
```
In pipeline, allure-report artifact will be pusblished. To open it, download and extract the zip and run allure open command.
```
npx allure open '/Users/jaishreepatidar/Downloads/allure-report-with-history'
```
![Allure Report History](README_images/Allure_Report_History.png?raw=true "Allure Report History")

<ins>Note: It will show history of only last 20 executions in pipeline as per below configuration.</ins>

![Allure Report History Pipeline Configuration](README_images/GitHubActions_AllureReportConfiguration.png?raw=true "Allure Report History Pipeline Configuration")

# CI Integration

## GitHub Actions
![Test workflow](https://github.com/twCatalyst/cypress-starter/actions/workflows/ci.yml/badge.svg)

Created pipeline in github actions
- Running eslint in pipeline
- To execute cypress test
- Publish report as artifacts (both Mochaawesome & Allure report)

![Report Artifact](README_images/GitHub_Actions_Artifact.png?raw=true "Report Artifact")

# Browserstack
To run tests in Browserstack run the command given below. Replace <your-browserstack-username> and <your-browserstack-access-key> with valid credentials in package.json file
```
npm run cy:tests:on:browserstack
```

# Accessibility
As a rule, applications that are used by a wide range of people, including differently abled people are made to be adapted. Apart from the fact that accessibility allows for the expansion of the number of users of an application, many companies think it is a great marketing move. Accessibility gains companies more trust and in return, more reaches from the outside world.

In this starter repository, we have added automation of a11y testing using cypress-axe and axe-core.

In you step definition or spec file-
- Import of terminallog to print table of violations in console (make sure the path is correct)
```
import { terminalLog } from '../../../../support/accessibility';
```
![Accessibility Terminal Logs](README_images/Accessibility_terminalLog_snapshot.png?raw=true "Accessibility Terminal Logs")

- Navigate to the page you want check accessibility of, and add following code
```
 cy.injectAxe()
   .checkA11y(null, null, terminalLog, true)
```
> **_NOTE:_** Change the above command to .checkA11y(null, null, terminalLog) to fail the test in case of accessibility failures found.

## Useful Links

- [Writing Your First Test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)
- [Example Recipies](https://github.com/cypress-io/cypress-example-recipes)
