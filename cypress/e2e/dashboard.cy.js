// cypress/integration/dashboard.spec.js
describe('Dashboard Page Tests', () => {
    const baseUrl = 'https://qa-test-9di7.onrender.com';
  
    it('should load the dashboard after successful login', () => {
      cy.visit('index.html');
      cy.get('input[name="username"]').type('validUser');
      cy.get('input[name="password"]').type('validPassword123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome, validUser').should('be.visible');
    });
  
    it('should display a list of items on the dashboard', () => {
      cy.visit('index.html');
      cy.get('input[name="username"]').type('validUser');
      cy.get('input[name="password"]').type('validPassword123');
      cy.get('button[type="submit"]').click();
      cy.contains('Items List').should('be.visible');
      cy.get('.item').should('have.length.greaterThan', 0);
    });
  });
  
  describe('Add Item Tests', () => {
    it('should add a new item successfully', () => {
      cy.visit('index.html');
      cy.get('input[name="username"]').type('validUser');
      cy.get('input[name="password"]').type('validPassword123');
      cy.get('button[type="submit"]').click();
      cy.contains('Add Item').click();
      cy.get('input[name="itemName"]').type('New Item');
      cy.get('input[name="itemDescription"]').type('Description of the new item');
      cy.get('button[type="submit"]').click();
      cy.contains('Item added successfully').should('be.visible');
      cy.url().should('include', '/dashboard');
    });
  
    it('should show an error message if item details are incomplete', () => {
      cy.visit('index.html');
      cy.get('input[name="username"]').type('validUser');
      cy.get('input[name="password"]').type('validPassword123');
      cy.get('button[type="submit"]').click();
      cy.contains('Add Item').click();
      cy.get('button[type="submit"]').click();
      cy.contains('Please fill out all required fields').should('be.visible');
    });
  });
  
  describe('Logout Tests', () => {
    it('should log out and redirect to login page', () => {
      cy.visit('index.html');
      cy.get('input[name="username"]').type('validUser');
      cy.get('input[name="password"]').type('validPassword123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
      cy.contains('Logout').click();
      cy.url().should('include', '/login');
      cy.contains('Please sign in').should('be.visible');
    });
  });
  