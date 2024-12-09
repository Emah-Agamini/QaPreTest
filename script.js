// Base URL for API requests
const baseUrl = "https://qa-test-9di7.onrender.com"; // Replace with your actual API endpoint

// Utility function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email regex
  return emailRegex.test(email);
}

// Utility function to validate password strength
function isStrongPassword(password) {
  return password.length >= 8; // Password should have at least 8 characters
}

// Login Functionality
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form submission refresh

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const feedback = document.getElementById("login-feedback");

  feedback.textContent = ""; // Clear previous messages

  if (!username || !password) {
    feedback.textContent = "Please provide both username and password.";
    return;
  }

  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
      feedback.textContent = "Login successful! Redirecting...";
      feedback.classList.add("success");
      loginForm.reset(); // Clear the form fields

      setTimeout(() => {
        window.location.href = "/dashboard.html"; // Replace with your actual dashboard
      }, 2000);
    } else {
      feedback.textContent = result.message || "Invalid username or password.";
    }
  } catch (error) {
    feedback.textContent = "An error occurred. Please try again.";
  }
});

// Signup Functionality
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form submission refresh

  const username = document.getElementById("signup-username").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  const feedback = document.getElementById("signup-feedback");

  feedback.textContent = ""; // Clear previous messages

  if (!username || !email || !password) {
    feedback.textContent = "All fields are required.";
    return;
  }

  if (!isValidEmail(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  if (!isStrongPassword(password)) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  try {
    const response = await fetch(`${baseUrl}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      feedback.textContent = "Signup successful!";
      feedback.classList.add("success");
      signupForm.reset(); // Clear the form fields
    } else {
      feedback.textContent = result.message || "Signup failed. Please try again.";
    }
  } catch (error) {
    feedback.textContent = "An error occurred. Please try again.";
  }
});
