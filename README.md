# deelTest

# Cypress Test for deel

This repository contains a Cypress test for the scenario: "Verify that text with selected role and country is displayed in the header of the chart" on [https://growth.deel.training/](https://growth.deel.training/).

## Prerequisites

- [Node.js](https://nodejs.org) installed
- [Cypress](https://www.cypress.io/) installed

## Installation

1. Clone this repository:
   ```bash
   git clone [<repository-url>](https://github.com/ajninaq/deelTest.git)
Navigate to the cloned repository:
   ```bash
   cd cypress/
   ```
 Install the dependencies:
   ```bash
   npm install
   npm install cypress
   ```

2. Configuration
Open the Cypress configuration file cypress.json and update the baseUrl to "https://growth.deel.training/".

## Running the Test
There are 2 ways to run the test:

a. The command line
To run the Cypress test, use the following command:

   ```bash
   npx cypress run
   The cypress test runner will proceed to run the test on the command line
   ```

b. The browser
Chrome or any web client should be installed.
To run the Cypress test, use the following command:
   ```bash
   npx cypress open
   This will open the Cypress Test Runner. Click on the test file named deelTest.cy.js to run the test.
   ```

## Test Scenario
The test scenario covers the following steps:

1. Verify that the url redirected to the right page
2. Verify that the form title
3. Verify that error message is returned on empty field when search button is selected
4. Select the role: QA Engineer
5. Verify the selected role: QA Engineer
6. Select the country: Canada
7. Verify the selected role: Canada
8. Click the Search button
9. Verify that when the Search button is clicked, it redirects to the approapriate page 
10. Verify that text with the selected role and country is displayed in the header of the chart
*Extra: Verify that low, median and high labels are visible on the graph*


## Test File
The test file cypress/e2e/deelTest.cy.js contains the Cypress test implementation for the scenario. It uses Cypress commands and assertions to interact with the website and perform the verification.

