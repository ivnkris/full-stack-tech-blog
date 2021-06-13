const handleSubmit = (event) => {
  event.preventDefault();

  console.log("form submitted");
};

$("#login-form").submit(handleSubmit);
