const deleteBlogBtn = $("#delete-blog-btn");

const makeRequest = async (url, method, body = {}) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  console.log(data);

  return data;
};

const handleDelete = async (event) => {
  const target = $(event.target);
  const blogId = target.attr("data-blog-id");

  try {
    const data = await makeRequest(`/api/blog/${blogId}`, "DELETE");
    console.log(data);
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
