import SigninComponent from "../components/Signin";
import Quote from "../components/Quote";
export const Signin = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <SigninComponent />
      <Quote />
    </div>
  );
};
