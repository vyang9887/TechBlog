const newFormHandler = async function (event) {
    event.preventDefault();
  
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
  
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    document.location.replace("/dashboard");
  };
  
  document
    .querySelector("#submit-new-post")
    .addEventListener("click", newFormHandler);