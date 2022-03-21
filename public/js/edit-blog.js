const editBlogForm = $("#edit-blog-form");

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

const handleEditBlog = async (event) => {
  event.preventDefault();

  const target = $(event.target);
  const blogId = target.attr("data-blog-id");

  const title = $("#blog-title").val();
  const content = $("#blog-content").val();

  if (title && content) {
    try {
      const data = await makeRequest(`/api/blogs/${blogId}`, "PUT", {
        title,
        content,
      });

      if (data.success) {
        window.location.replace(`/blogs/${blogId}`);
      } else {
        alert("Failed to update blog");
      }
    } catch (error) {
      console.log("Failed to update blog");
    }
  } else {
    console.log("Failed to update blog");
  }
};

const handleDelete = async (event) => {
  const target = $(event.target);
  const blogId = target.attr("data-blog-id");

  try {
    const data = await makeRequest(`/api/blogs/${blogId}`, "DELETE");
    if (data.success) {
      window.location.replace("/dashboard");
    } else {
      console.log("Failed to delete blog");
    }
  } catch (error) {
    console.log("Failed to delete blog");
  }
};

editBlogForm.on("submit", handleEditBlog);
