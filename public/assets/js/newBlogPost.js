// callback function for the form submit event handler
const handleNewPost = async (event) => {
  event.preventDefault();

  // get the post title and body values from the form
  const title = $("#title").val();
  const postBody = $("#post-body").val();
  // get the user_id
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

  // submit a post request to the API
  const response = await fetch("/api/posts/", options);

  if (response.status === 200) {
    // redirect to the dashboard
    window.location.replace("/dashboard");
  } else {
    console.log("Failed to create new post");
  }
};

$('form[name="new-post-form"]').submit(handleNewPost);
