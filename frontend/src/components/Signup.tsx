import { useState } from "react";
import { signupType } from "@sarthak19360/common";
import { BACKEND_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<signupType>({
    username: "",
    name: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPostInputs({
      username: "",
      name: "",
      password: "",
    });
    try {
      const resp = await fetch(`${BACKEND_URL}/api/v1/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postInputs),
      });
      const json = await resp.json();

      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Data was successfully sent");
      localStorage.setItem("token", json.token);
      navigate("/blogs");
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-3xl font-bold">Create an account</div>
      <div className="text-gray-400">
        <span>Already have an account?</span>
        <Link to="/signin" className="pl-2 underline">
          Login
        </Link>
      </div>
      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="my-4 w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
            autoComplete="off"
            onChange={(e) => {
              setPostInputs({ ...postInputs, username: e.target.value });
            }}
          />
        </div>
        <div className="mb-4 w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
            onChange={(e) => {
              setPostInputs({ ...postInputs, name: e.target.value });
            }}
          />
        </div>
        <div className="mb-3 w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            onChange={(e) => {
              setPostInputs({ ...postInputs, password: e.target.value });
            }}
          />
        </div>
        <div className="w-1/2">
          <button
            type="submit"
            className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
