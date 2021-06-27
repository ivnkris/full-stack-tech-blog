// callback function for delete button
const onDelete = async (event) => {
  // get the post id
  const id = event.currentTarget.dataset.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  // submit a fetch request to delete the post with the post id
  const response = await fetch(`/api/posts/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED DELETE");
  } else {
    // redirect to the dashboard
    window.location.replace("/dashboard");
  }
};

$('[name="delete-btn"]').click(onDelete);
