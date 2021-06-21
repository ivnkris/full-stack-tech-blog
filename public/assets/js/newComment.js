const handleNewComment = async (event) => {
  event.preventDefault();

  console.log(event);
  const message = $("#message").val();
  const user_id = event.currentTarget.id;
  // const post_id =

  const requestBody = {
    message,
    user_id,
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
