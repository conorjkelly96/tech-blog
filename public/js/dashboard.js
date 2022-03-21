const deleteBlogBtn = $("#delete-blog-btn");

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

deleteBlogBtn.on("click", handleDelete);
