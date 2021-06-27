// callback function for delete button
const onCommentDelete = async (event) => {
  // get the comment id
  const id = event.currentTarget.dataset.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  // submit a fetch request to delete the comment with the comment id
  const response = await fetch(`/api/comments/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED DELETE");
  } else {
    // redirect to the dashboard
    window.location.replace("/dashboard");
  }
};

$('[name="delete-comment-btn"]').click(onCommentDelete);
