import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Author from "../components/Author";
import BlogComponent from "../components/BlogComponent";
import { BACKEND_URL } from "../utils/constants";

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
  const [searchAuthorParams] = useSearchParams();
  const authorName = searchAuthorParams.get("authorName");

  const fetchBlog = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Authorization token not found");
      return;
    }
    const resp = await fetch(`${BACKEND_URL}/api/v1/blog/${id}`, {
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
  }, []);

  return (
    <div className="w-9/12 flex mx-auto h-screen">
      <BlogComponent blog={blog} />
      <Author authorName={authorName} />
    </div>
  );
};
