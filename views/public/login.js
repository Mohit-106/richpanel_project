document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(loginForm);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      })
        .then((response) => {
          if (response.ok) {
            alert("Signup successful!");
            window.location.href = "http://127.0.0.1:5500/views/dashboard.html"; 
          } else {
            alert("Login failed. Please check your email and password.");
            throw new Error("Login failed.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
  