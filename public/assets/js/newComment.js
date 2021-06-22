const handleNewComment = async (event) => {
  event.preventDefault();

  const pathName = window.location.pathname;

  const message = $("#message").val();
  const post_id = pathName.slice(7);

  const requestBody = {
    message,
    post_id,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };

  const response = await fetch("/api/comments/", options);

  if (response.status === 200) {
    window.location.reload();
  } else {
    console.log("Failed to create new comment");
  }
};

$('form[name="add-comment-form"]').submit(handleNewComment);
