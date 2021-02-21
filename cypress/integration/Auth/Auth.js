/// <reference types = "Cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User navigates to web application site', () => {
  // TODO: implement step
  cy.visit("https://www.saucedemo.com/index.html",{timeout:120000})
});

Given('inputs username as {string} and password as {string}', (username,password) => {
  // TODO: implement step
  cy.get("#user-name").type(username,{delay:5})
  cy.get("#password").type(password,{delay:5})
});

Then('Clicks the Login button', () => {
  // TODO: implement step
  cy.get("#login-button").click()
});

Then('waits for 5000 milliseconds', () => {
  // TODO: implement step
  cy.wait(5000)
});

Then('Assert user login is successful', () => {
  // TODO: implement step
  cy.get('.svg-inline--fa').should("be.visible")
});
