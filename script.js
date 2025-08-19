//your JS code here. If required.
  const form = document.getElementById("loginForm");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const rememberMe = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");

    // On page load, check if credentials exist
    window.onload = () => {
      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");
      
      if (savedUsername && savedPassword) {
        existingBtn.style.display = "block"; // Show existing login button
      }
    };

    // Handle form submission
    form.onsubmit = (e) => {
      e.preventDefault(); // Prevent page reload

      const username = usernameField.value;
      const password = passwordField.value;

      alert("Logged in as " + username);

      if (rememberMe.checked) {
        // Save credentials
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block";
      } else {
        // Remove previously saved credentials
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
      }
    };

    // Handle "Login as existing user" button
    existingBtn.onclick = () => {
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        alert("Logged in as " + savedUsername);
      }
    };