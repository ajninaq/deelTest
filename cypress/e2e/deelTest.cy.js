/// <reference types="cypress" />

const { beforeEach } = require("mocha")

//Please implement a test based on the following scenario:

// URL:<>

// 1. Select the role: QA Engineer
// 2. Select the country: Canada
// 3. Click the Search

// Verify that text with selected role and country is displayed in the header of the chart


describe('Verify Role and Country is Selected', () => {
  
  let details;

  beforeEach(function(){

    cy.visit('dev/salary-insights')
    cy.title().should('equal', 'Deel')

    //Get data object from example.json file and assign to details variable
    cy.fixture('datafile').then((data) => {
      details = data
    })

  })

  it('Verify that when text is not selected and search button is clicked, an error is returned', () => {
    //Checks that the search is on the appropriate page
    cy.checkPage()

    //Verify that when search button is selected, the search is not done
    cy.get('.MuiButton-root').click()
    cy.get(':nth-child(1) > .MuiGrid-container > :nth-child(1) > .MuiTypography-root').should('have.text', 'Role is required')
    cy.get(':nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiTypography-root').should('have.text', 'Country is required')

  })

  
  it('Verify that text with selected role and country is displayed in the header of the chart', () => {

    //The Role option is selected here
    cy.get('#mui-2').type(details.role)
    cy.wait(2000)
    cy.get('.MuiAutocomplete-option').click()

    // assertion to check if QA Engineer option is selected
    cy.get('#mui-2').should("have.value" , "QA Engineer");

    //The Country option is selected here
    cy.get('#mui-4').type(details.country)
    cy.wait(2000)
    cy.get('.MuiAutocomplete-option').click()

    // assertion to check if Canada option is selected
    cy.get('#mui-4').should("have.value" , "Canada");
    cy.get('.MuiButton-root').click()

    //Verify that text with selected role and country is displayed in the header of the chart
    cy.get('[data-qa="salary-table"] > .MuiTypography-root').should('have.text', 'Senior QA Engineer compensation in Canada')

    cy.get(':nth-child(1) > .css-0 > .css-119329a > .css-1lekzkb > .css-70qvj9 > .MuiTypography-root > .deel-ui__typography__heading_6')
      .should('have.text', 'QA Engineer')

    cy.get('.css-1lekzkb > .deel-ui__typography__heading_6')
      .should('have.text', 'Canada')

    //Verify that Low, Medium and High are displayed on the chart
    cy.get(':nth-child(5) > .css-0 > .css-119329a > .css-1lekzkb > .css-70qvj9 > .MuiTypography-root > .deel-ui__typography__heading_6')
      .should('have.text', 'Senior Level')

    cy.get(':nth-child(1) > .deel-ui__salary-insights__cartesian-axis-tick-value > .deel-ui__salary-insights__customized-tick > [color="gray-dark"]')
      .should('have.text', 'LOW')

    cy.get(':nth-child(4) > .deel-ui__salary-insights__cartesian-axis-tick-value > .deel-ui__salary-insights__customized-tick > [color="gray-dark"]')
      .should('have.text', 'MEDIAN')

    cy.get(':nth-child(10) > .deel-ui__salary-insights__cartesian-axis-tick-value > .deel-ui__salary-insights__customized-tick > [color="gray-dark"]')
      .should('have.text', 'HIGH')

  })  
})