import Quote from "../components/Quote";
import SignupComponent from "../components/Signup";

export const Signup = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <SignupComponent />
      <Quote />
    </div>
  );
};
