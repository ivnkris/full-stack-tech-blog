// callback function  for the form submit event handler
const handleSignupSubmit = async (event) => {
  event.preventDefault();

  // get the values from the relevant fields
  const username = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();
  const firstName = $("#first-name").val();
  const lastName = $("#last-name").val();

  // execute only if password and confirm password matches
  if (password === confirmPassword) {
    const requestBody = {
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(requestBody),
    };

    // submit a post request to the auth route
    const response = await fetch("/auth/signup", options);

    if (response.status === 200) {
      // redirect to the login page
      window.location.replace("/login");
    } else {
      console.log("Failed to signup");
    }
  } else {
    console.log("Passwords do not match");
  }
};

$("#sign-up-form").submit(handleSignupSubmit);
