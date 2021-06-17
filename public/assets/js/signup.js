const handleSignupSubmit = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();
  const firstName = $("#first-name").val();
  const lastName = $("#last-name").val();

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

    const response = await fetch("/auth/sign-up", options);

    if (response.status === 200) {
      window.location.replace("/login");
    } else {
      console.log("Failed to signup");
    }
  } else {
    console.log("Passwords do not match");
  }
};

$("#sign-up-form").submit(handleSignupSubmit);
