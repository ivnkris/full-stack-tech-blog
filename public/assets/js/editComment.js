// callback function for the form event handler
const handleEditComment = async (event) => {
  event.preventDefault();

  // get the comment id
  const id = event.currentTarget.id;

  // get the comment message
  const message = $("#message").val();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      message,
    }),
  };

  // submit a fetch request to the comment id
  const response = await fetch(`/api/comments/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED UPDATE");
  } else {
    // redirect to the dashboard
    window.location.replace("/dashboard");
  }
};

$('[name="edit-comment-form"]').submit(handleEditComment);
