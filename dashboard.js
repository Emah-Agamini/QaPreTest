// DOM Elements
const userInfo = document.getElementById('user-info');
const logoutButton = document.getElementById('logout-button');

// Get token from localStorage
const token = localStorage.getItem('authToken');

// Redirect to login page if no token is found
if (!token) {
  alert('You are not logged in! Redirecting to login page.');
  window.location.href = 'index.html';
}

// Fetch user details
async function fetchUserDetails() {
  try {
    const response = await fetch('https://qa-test-9di7.onrender.com/auth/user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      userInfo.textContent = `Hello, ${data.username}! Your ID is ${data.id}.`;
    } else {
      const errorData = await response.json();
      userInfo.textContent = `Error: ${errorData.message || 'Failed to load user details.'}`;
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    userInfo.textContent = 'An error occurred while fetching your details.';
  }
}

// Logout functionality
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('authToken'); // Remove token
  alert('You have been logged out.');
  window.location.href = 'index.html'; // Redirect to login
});

// Fetch user details on page load
fetchUserDetails();
const fetchItems = async () => {
    try {
      const response = await fetch('https://qa-test-9di7.onrender.com/items', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the token
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
  
      const items = await response.json(); // Parse the response
      console.log(items); // Log the items for now
      setItems(items); // Update the UI with fetched items
    } catch (error) {
      console.error('Error fetching items:', error.message);
      alert('Failed to fetch items. Please try again.');
    }
  };
  