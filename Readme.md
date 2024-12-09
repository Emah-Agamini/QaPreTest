QA Pre-Test Task

Overview
This repository contains the implementation of the QA Pre-Test Task, which includes backend API testing and frontend UI development. The project was built using Jest and Cypress for testing and a React-based UI for frontend development.

Table of Contents
- [Backend API Testing](#backend-api-testing)
- [Frontend UI Development](#frontend-ui-development)
- [How to Run](#how-to-run)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)

Backend API Testing
Automated tests are written to validate the following:
- Authentication:
  - Valid login and logout.
  - Handling incorrect login credentials.
  - Token expiration and refresh.
- User Management:
  - Create, update, and delete user accounts.
  - Fetch user details.
  - Validate access control to restrict unauthorized data access.
- Item Management:
  - Create, update, delete, and fetch items.
  - Ensure only item owners can modify/delete their items.
  - Handle edge cases (e.g., duplicate items, invalid input).

Tools used:
- Jest: Unit and integration tests.
- Cypress: End-to-end API testing.

Frontend UI Development
A React-based UI was developed to allow users to:
- Register and log in.
- View, create, update, and delete items.
- View appropriate messages for actions (e.g., success, error, validation).

Tools used:
- Jest: Component unit tests.
- Cypress: End-to-end testing for user interactions.

How to Run
1. Clone the repository:
   git clone <repository-url>
   cd <repository-folder>
   
2. Install dependencies for the backend:
   cd backend
   npm install
   
3. Run the backend server:
   npm start
   
4. Install dependencies for the frontend:
   cd ../frontend
   npm install

5. Run the frontend server:
   npm start

Technologies Used
- Node.js: Backend development.
- React.js: Frontend development.
- Jest: Unit and integration testing.
- Cypress: End-to-end testing.

Setup Instructions
1. Clone this repository to your local machine.
2. Follow the steps in the [How to Run](#how-to-run) section to set up and start the backend and frontend servers.
3. Run tests:
   - Backend tests:
     cd backend
     npm test

   - Frontend tests:
     cd frontend
     npm test

API Reference
The backend API is hosted at: https://qa-test-9di7.onrender.com
API documentation is available via Postman: https://documenter.getpostman.com/view/16205494/2sA3s1psev