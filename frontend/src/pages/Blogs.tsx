import { useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { BACKEND_URL } from "../utils/constants";
import { Link } from "react-router-dom";

interface BlogType {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

export const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const fetchBlogs = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Authorization token not found");
      return;
    }
    const resp = await fetch(`${BACKEND_URL}/api/v1/blog/bulk`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`, // Attach the token to the Authorization header
      },
    });
    const json = await resp.json();
    setBlogs(json);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="w-full flex flex-col justify-center">
      <Link to="/blogpost" className="w-full mt-7 flex justify-center mx-auto">
        <button
          type="button"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Blog
        </button>
      </Link>
      {blogs.map((b) => (
        <BlogCard
          key={b.id}
          id={b.id}
          authorId={b.authorId}
          date={new Date(Date.now()).toDateString()}
          title={b.title}
          content={b.content}
        />
      ))}
    </div>
  );
};
