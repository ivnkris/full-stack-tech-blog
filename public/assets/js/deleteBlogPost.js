const onDelete = async (event) => {
  const id = event.currentTarget.dataset.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(`/api/posts/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED DELETE");
  } else {
    window.location.replace("/dashboard");
  }
};

$('[name="delete-btn"]').click(onDelete);
