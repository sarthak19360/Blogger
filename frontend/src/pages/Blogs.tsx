import { useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";
// import { BACKEND_URL } from "../utils/constants";

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
    const resp = await fetch(`http://localhost:8787/api/v1/blog/bulk`, {
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
