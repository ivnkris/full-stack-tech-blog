// callback function for the form submit event handler
const handleNewComment = async (event) => {
  event.preventDefault();

  // get the pathname from the url
  const pathName = window.location.pathname;

  // get the message value from the form
  const message = $("#message").val();
  // slice the url to keep the comment id only
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

  // submit a post request to the API
  const response = await fetch("/api/comments/", options);

  if (response.status === 200) {
    // reload the page
    window.location.reload();
  } else {
    console.log("Failed to create new comment");
  }
};

$('form[name="add-comment-form"]').submit(handleNewComment);
