const handleEditComment = async (event) => {
  event.preventDefault();

  const id = event.currentTarget.id;

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

  const response = await fetch(`/api/comments/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED UPDATE");
  } else {
    window.location.replace("/dashboard");
  }
};

$('[name="edit-comment-form"]').submit(handleEditComment);
