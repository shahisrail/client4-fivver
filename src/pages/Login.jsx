import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav4 from "../components/Nav/Nav4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle the login (redirect) when user submits the form
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation to check if the email has 12 characters (user ID)
    if (email.length === 12 && password) {
      // Store user in localStorage (optional)
      localStorage.setItem("user", JSON.stringify({ email }));

      // Redirect to the home page after successful login
      navigate("/bussness"); 
    } else {
      // For now, we're not handling validation errors
      alert("Please enter a valid 12-character user ID and password.");
    }
  };

  return (
    <div>
      <Nav4 />
      <div className="max-w-7xl mx-auto space-y-4 p-10 md:p-5">
        <div className="border-4 border-[#1d70b8] w-1/2">
          <h2 className="bg-[#1d70b8] text-white text-1xl font-bold p-2">
            Keeping your information secure
          </h2>
          <h2 className="text-[1.1875rem] l p-4">
            Do not share your Government Gateway user ID and password with  branyone else.
          </h2>
        </div>
        <h2 className="text-1xl md:text-2xl lg:text-4xl font-bold">
          Sign in using Government <br /> Gateway.
        </h2>
        <form onSubmit={handleLogin} className="space-y-4 w-1/2">
          <label className="font-semibold">Government Gateway user ID</label>
          <p>This could be up to 12 characters.</p>
          <input
            className="border-2 border-gray-300 p-2 w-full"
            type="text"
            placeholder="Enter your 12-character user ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-2 border-gray-300 p-2 w-full"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#1d70b8] text-white font-bold p-2 w-full"
          >
            Sign In
          </button>
        </form>
        <h2 className="text-2xl font-semibold">New users of Government Gateway</h2>
        <p className="underline text-[#1d70b8] text-[20px]">Create sign in details</p>
        <div>
          <h2 className="text-2xl font-semibold">Problems signing in</h2>
          <p className="underline text-[#1d70b8] text-[20px]">I have forgotten my password</p>
          <p className="underline text-[#1d70b8] text-[20px]">I have forgotten my Government Gateway user ID</p>
          <p className="underline text-[#1d70b8] text-[20px]">I have forgotten my Government Gateway user ID and password</p>
        </div>
        <p className="underline text-[#1d70b8] text-[20px]">Get help with this page</p>
      </div>
    </div>
  );
};

export default Login;
