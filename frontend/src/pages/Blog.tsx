import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Author from "../components/Author";
import BlogComponent from "../components/BlogComponent";

interface BlogType {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

export const Blog = () => {
  const searchParams = useParams();
  const id = Number(searchParams.id);
  const [blog, setBlog] = useState<BlogType>();
  const [authorName, setAuthorName] = useState<string>("");
  const fetchAuthorName = async (id: number) => {
    const resp = await fetch(
      `http://localhost:8787/api/v1/user/blogAuthor/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await resp.json();
    setAuthorName(json.name);
  };
  const fetchBlog = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Authorization token not found");
      return;
    }
    const resp = await fetch(`http://localhost:8787/api/v1/blog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const json = await resp.json();
    setBlog(json.post);
  };
  useEffect(() => {
    fetchBlog();
    fetchAuthorName(id);
  }, []);

  return (
    <div className="w-9/12 flex mx-auto h-screen">
      <BlogComponent blog={blog} />
      <Author authorName={authorName} />
    </div>
  );
};
