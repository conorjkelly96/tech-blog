const editBlogForm = $("#edit-blog-form");

const getErrorsEditBlog = ({ title, content }) => {
  const errors = {};

  if (!title) {
    errors.title = "Blog Title is required";
  }

  if (!content) {
    errors.content = "Blog Content is required";
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

const handleEditBlog = async (event) => {
  event.preventDefault();

  const target = $(event.target);
  const blogId = target.attr("data-blog-id");

  const title = $("#blog-title").val();
  const content = $("#blog-content").val();

  const errors = getErrorsEditBlog({
    title,
    content,
  });

  if (title && content) {
    try {
      if (!Object.keys(errors).length) {
        // make PUT
        const response = await fetch(`/api/blog/${blogId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        });

        console.log("RESPONSE", response);

        const data = await response.json();
        console.log(data);

        if (data.success) {
          console.log("success");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.log("Failed to update blog");
  }
};

editBlogForm.on("submit", handleEditBlog);
