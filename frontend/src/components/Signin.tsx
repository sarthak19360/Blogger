import { useState } from "react";
import { signinType } from "@sarthak19360/common";
// import { BACKEND_URL } from "../utils/constants";

const Signin = () => {
  const [postInputs, setPostInputs] = useState<signinType>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPostInputs({
      username: "",
      password: "",
    });
    try {
      const resp = await fetch(`http://localhost:8787/api/v1/user/signin`, {
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
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleChange = (e: any) => {
    setPostInputs({ ...postInputs, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-3xl font-bold mb-3">Login into your account</div>
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
            value={postInputs.username}
            onChange={handleChange}
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
            value={postInputs.password}
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2">
          <button
            type="submit"
            className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
