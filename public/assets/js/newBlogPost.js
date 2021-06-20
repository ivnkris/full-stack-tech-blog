const handleNewPost = async (event) => {
  event.preventDefault();

  const title = $("#title").val();
  const postBody = $("#post-body").val();
  const user_id = event.currentTarget.id;

  const requestBody = {
    title,
    body: postBody,
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

  const response = await fetch("/api/posts/", options);

  if (response.status === 200) {
    window.location.replace("/dashboard");
  } else {
    console.log("Failed to create new post");
  }
};

$('form[name="new-post-form"]').submit(handleNewPost);
