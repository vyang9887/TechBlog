const editFormHandler = async (event) => {
    event.preventDefault();
  
    const id = event.target.getAttribute("data-id");
    const newTitle = document.querySelector(`#title${id}`).value;
    const newDescription = document.querySelector(`#content${id}`).value;
  
    await fetch(`/api/posts/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: newTitle,
        description: newDescription,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    alert("Successfully updated post");
    document.location.reload();
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        alert("Successfully deleted post");
        document.location.reload();
      } else {
        alert("Failed to delete post");
      }
    }
  };
  
  const deleteBTN = document.querySelectorAll(".delete-btn");
  for (let i = 0; i < deleteBTN.length; i++) {
    deleteBTN[i].addEventListener("click", delButtonHandler);
  }
  
  const updatebtn = document.querySelectorAll("#update-btn");
  for (let i = 0; i < updatebtn.length; i++) {
    updatebtn[i].addEventListener("click", editFormHandler);
  }