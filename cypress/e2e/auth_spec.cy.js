describe('User Authentication Tests', () => {
    const baseUrl = 'https://qa-test-9di7.onrender.com';
    
    beforeEach(() => {
      cy.visit('index.html');  // Adjust the path if necessary
    });
  //SIGN UP
    it('should sign up a new user successfully', () => {
      cy.get('#signup-username').type('jacob');  // Enter username
      cy.get('#signup-email').type('jacob@yopmail.com');  // Enter email
      cy.get('#signup-password').type('password123!');  // Enter password
      cy.get('#signup-form > button').click();  // Submit the form
  
      // Check for success message (adjust message based on your response)
      // cy.contains('Signup successful').should('be.visible');
      
      // Optionally, verify if the user is redirected or other elements appear
      // cy.url().should('include', '/dashboard');
    });
  
    it('should fail sign up with existing username', () => {
      cy.get('#signup-username').type('jacob');  // Use an existing username
      cy.get('#signup-email').type('jacob@yopmail.com');  // Use an existing email
      cy.get('#signup-password').type('password123!');
      cy.get('#signup-form > button').click();
  
      // Check for failure message (adjust message based on your response)
      // cy.contains('Username already taken').should('be.visible');
    });
  
    it('should login successfully with valid credentials', () => {
      cy.get('#login-username').type('jacob');  // Enter username
      cy.get('#login-password').type('password123!');  // Enter password
      cy.get('#login-form > button').click();  // Submit the form
      cy.visit('dashboard.html');
      cy.wait(8000); 
  
      // Check for successful login and redirect to dashboard
      // cy.contains('Dashboard').should('be.visible');
      // cy.url().should('include', '/dashboard');
    });
  
    it('should fail login with invalid User credentials', () => {
      cy.get('#login-username').type('invalidUser');
      cy.get('#login-password').type('invalidPassword123');
      cy.get('#login-form > button').click();
  
      // Check for failure message
      cy.contains('User not Found').should('be.visible');
      //Check for incorrect password
    });
  });

