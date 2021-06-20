const onCommentDelete = async (event) => {
  const id = event.currentTarget.dataset.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(`/api/comments/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED DELETE");
  } else {
    window.location.replace("/dashboard");
  }
};

$('[name="delete-comment-btn"]').click(onCommentDelete);
