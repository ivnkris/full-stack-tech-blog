const handleSubmit = async (event) => {
  event.preventDefault();

  // get the email and password values from the form
  const email = $("#email").val();
  const password = $("#password").val();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      email,
      password,
    }),
  };

  // submit a fetch request to the auth route
  const response = await fetch("/auth/login", options);

  if (response.status !== 200) {
    console.log("FAILED LOGIN");
  } else {
    // redirect to the dashboard
    window.location.replace("/dashboard");
  }
};

$("#login-form").submit(handleSubmit);
