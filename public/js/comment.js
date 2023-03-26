const addComment = async () => {
    const comments = document.querySelector("#comment").value.trim();
    const postId = document.querySelector("#comment-btn");
  
    if (comments) {
      const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({
          comments: comments,
          post_id: postId.name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to add a comment");
      }
    }
  };