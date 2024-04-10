import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";

interface BlogCardPropsType {
  id: number;
  authorId: number;
  date: string;
  title: string;
  content: string;
}

export const BlogCard = ({
  id,
  authorId,
  date,
  title,
  content,
}: BlogCardPropsType) => {
  const [authorName, setAuthorName] = useState<string>("");
  const fetchAuthorName = async (authorId: number) => {
    const resp = await fetch(
      `${BACKEND_URL}/api/v1/user/blogAuthor/${authorId}`,
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
  useEffect(() => {
    fetchAuthorName(authorId);
  }, []);
  return (
    <Link
      to={`/blog/${id}?authorName=${authorName}`}
      className="w-1/2 mx-auto p-5"
    >
      <div className="flex items-center mb-2">
        <Avatar name={authorName} />
        <div className="mr-1">{authorName}</div>
        <div className="text-gray-500">{date}</div>
      </div>
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="font-normal text-base mb-4">
        {`${content.substring(0, 177)} ...`}
      </div>
      <div className="text-gray-400 mb-8">1 min read</div>
      <div className="border-b-2"></div>
    </Link>
  );
};

interface avatarPropsType {
  name: string;
}

const Avatar = ({ name }: avatarPropsType) => {
  return (
    <div className="w-8 h-8 rounded-full bg-blue-300 text-white flex justify-center items-center mr-2">
      {name[0]}
    </div>
  );
};
