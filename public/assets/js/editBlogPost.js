// callback function for the form submit event handler
const handleEditPost = async (event) => {
  event.preventDefault();

  // get the post id
  const id = event.currentTarget.id;

  // get the post title and body
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

  // submit a fetch request for the post id
  const response = await fetch(`/api/posts/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED UPDATE");
  } else {
    // redirect to the dashboard
    window.location.replace("/dashboard");
  }
};

$('[name="edit-post-form"]').submit(handleEditPost);
