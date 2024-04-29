/// <reference types = "cypress" />

// Importing Classes;
import { LoginPage } from "../pages/login";

// Declaring variables
const baseUrl = Cypress.config().baseUrl;
const login = new LoginPage();
//const logout = new LogoutAction();


it('Verify Successful Login with valid user', () => {
    // Visit application URL
    cy.visit('https://www.saucedemo.com/')
    //cy.visit('https://demoqa.com/')

    // Enter valid username and password
    login.enterUsername();
    login.enterPassword();

    // Click on Login Btn
    login.clickLogin();

    // Check page URL is correct after login
    cy.url().should('eq', baseUrl + 'inventory.html');
    //cy.url().should('eq', 'https://www.saucedemo.com/' + 'inventory.html');

    // Check that logout element is available in the sidebar
    //logout.clickHandBurger();
    //logout.locateLogoutButton();
});