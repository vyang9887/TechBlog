const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // document.location.replace("/dashboard");
        const response = await fetch("/api/users/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to dashboard
          document.location.replace("/dashboard");
        } else {
          alert(response.statusText);
        }
      } else {
        alert(
          "Error creating account. Must have valid email and password length of at least 6 characters."
        );
      }
    }
  };
  
  document
    .querySelector("#signup-submit")
    .addEventListener("click", signupFormHandler);