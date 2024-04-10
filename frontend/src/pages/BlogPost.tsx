import { useState } from "react";
import { BACKEND_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";

export const BlogPost = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Authorization token not found");
        return;
      }
      const resp = await fetch(`${BACKEND_URL}/api/v1/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(postInputs),
      });
      const json = await resp.json();
      console.log(json);

      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Data was successfully sent");
      navigate("/blogs");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleChange = (e: any) => {
    setPostInputs({ ...postInputs, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-8/12 mx-auto flex flex-col mt-7"
    >
      <div className="flex items-center justify-between">
        <Link
          to="/blogs"
          className="p-2 rounded-xl bg-red-100 flex justify-center items-center mr-2"
        >
          Home
        </Link>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Publish
        </button>
      </div>
      <div className="flex flex-col w-full mx-auto">
        <input
          className="text-5xl px-5 pt-5 pb-2 mb-1 focus:outline-none"
          placeholder="Title"
          name="title"
          value={postInputs.title}
          onChange={handleChange}
        />
        <textarea
          className="text-xl px-6 pt-1 min-h-96 focus:outline-none"
          placeholder="Tell your story..."
          name="content"
          value={postInputs.content}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
