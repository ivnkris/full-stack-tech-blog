const handleEditPost = async (event) => {
  event.preventDefault();

  const id = event.currentTarget.id;

  const title = $("#title").val();
  const body = $("#body").val();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      body,
    }),
  };

  const response = await fetch(`/api/posts/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED UPDATE");
  } else {
    window.location.replace("/dashboard");
  }
};

$('[name="edit-post-form"]').submit(handleEditPost);
