const loginForm = $("#login-form");
const signUpForm = $("#sign-up-form");

console.log("connected");

const getErrorsSignUp = ({ email, password, confirmPassword }) => {
  const errors = {};

  if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = "Invalid email address";
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
  const fields = ["email", "password", "confirmPassword"];
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
  const password = $("#password").val();
  const confirmPassword = $("#confirm-password").val();

  console.log(email, password, confirmPassword);

  //   const errors = getErrorsSignUp({
  //     email,
  //     password,
  //     confirmPassword,
  //   });

  //   renderErrorMessages(errors);

  //   if (!Object.keys(errors).length) {
  //     const response = await fetch("/auth/sign-up", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       console.log("success");
  //     }
  //   }
};

signUpForm.on("submit", handleSignUp);
