const createBlogForm = $("#create-blog-form");

const getErrorsCreateBlog = ({ blogTitle, blogContent }) => {
  const errors = {};

  if (!blogTitle) {
    errors.blogTitle = "Blog Title is required";
  }

  if (!blogContent) {
    errors.blogContent = "Blog Content is required";
  }

  return errors;
};

const renderErrorMessages = (errors) => {
  const fields = ["blog-title", "blog-content"];
  fields.forEach((field) => {
    const errorDiv = $(`#${field}-error`);

    if (errors[field]) {
      errorDiv.text(errors[field]);
    } else {
      errorDiv.text("");
    }
  });
};

const handleCreateBlog = async (event) => {
  event.preventDefault();

  const blogTitle = $("#blog-title").val();
  const blogContent = $("#blog-content").val();

  const errors = getErrorsCreateBlog({
    blogTitle,
    blogContent,
  });

  renderErrorMessages(errors);

  if (!Object.keys(errors).length) {
    // make POST request to /auth/login
    const response = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blogTitle, blogContent }),
    });

    console.log("RESPONSE", response);

    const data = await response.json();
    console.log(data);

    if (data.success) {
      window.location.reload();
      console.log("success");
    }
  }
};

createBlogForm.on("submit", handleCreateBlog);
