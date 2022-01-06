const loginForm = $("#login-form");
const signUpForm = $("#sign-up-form");

console.log(loginForm);

const getErrorsSignUp = ({ email, username, password, confirmPassword }) => {
  const errors = {};

  if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = "Invalid email address";
  }

  if (!username) {
    errors.username = "Username is required";
  }

  if (
    !password ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    )
  ) {
    errors.password = "Invalid password";
  }

  if (!confirmPassword || password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

const renderErrorMessages = (errors) => {
  const fields = ["email", "username", "password", "confirmPassword"];
  fields.forEach((field) => {
    const errorDiv = $(`#${field}-error`);

    if (errors[field]) {
      errorDiv.text(errors[field]);
    } else {
      errorDiv.text("");
    }
  });
};

const handleSignUp = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirm-password").val();

  const errors = getErrorsSignUp({
    email,
    username,
    password,
    confirmPassword,
  });

  renderErrorMessages(errors);

  if (!Object.keys(errors).length) {
    const response = await fetch("/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });

    console.log(response);

    const data = await response.json();
    console.log(data);

    if (data.success) {
      console.log("success");
    }
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  $("#login-error").text("");

  if (!email || !password) {
    $("#login-error").text("Login failed, please try again");
  } else {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      window.location.replace("/dashboard");
    } else {
      console.log("error");
      $("#login-error").text("Login failed, please try again");
    }
  }
};

signUpForm.on("submit", handleSignUp);
loginForm.on("submit", handleLogin);
