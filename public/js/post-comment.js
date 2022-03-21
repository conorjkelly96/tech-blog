const postCommentForm = $("#post-comment-form");

const getErrorsPostComment = ({ comment }) => {
  const errors = {};

  if (!comment) {
    errors.blogTitle = "Blog Title is required";
  }

  return errors;
};

const renderErrorMessages = (errors) => {
  const fields = ["comment"];
  fields.forEach((field) => {
    const errorDiv = $(`#${field}-error`);

    if (errors[field]) {
      errorDiv.text(errors[field]);
    } else {
      errorDiv.text("");
    }
  });
};

const handlePostComment = async (event) => {
  event.preventDefault();

  const comment = $("#comment").val();

  const errors = getErrorsCreateBlog({
    comment,
  });

  renderErrorMessages(errors);

  if (!Object.keys(errors).length) {
    // make POST request to /api/
    const response = await fetch("/api/blog/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ portfolioName }),
    });

    const data = await response.json();

    console.log("RESPONSE", response);

    const data = await response.json();
    console.log(data);

    if (data.success) {
      console.log("success");
    }
  }
};

createBlogForm.on("submit", handleCreateBlog);
