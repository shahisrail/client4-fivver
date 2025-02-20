import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav2 = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div>
      <>
        <div className="bg-black ">
          <div className="text-white p-4 flex flex-wrap justify-between items-center max-w-7xl mx-auto gap-3 lg:gap-[400px]">
            <div className=" text-2xl font-bold text-white">
              <Link to={"/bussness"}>
              <img src="/download.png" alt="" style={{ filter: 'invert(100%) brightness(100%) contrast(100%)' }} />
              </Link>{" "}
            </div>
            <div className="text-center font-bold">Personal tax account</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4 space-y-4 ">
          <nav className=" flex flex-wrap items-center justify-between">
            <div className="text-center font-bold">
              <a className="border-b-4 border-[#1d70b8] flex items-center gap-2 cursor-pointer">
                <img src="/home.png" alt="Home" className="w-4 h-4" />
                Account home
              </a>
            </div>
            <ul className="flex gap-4 flex-wrap">
              <li>
                <a href="#">Message</a>
              </li>
              <li>
                <a href="#">Check Progress</a>
              </li>
              <li>
                <a href="#">Profile and setting</a>
              </li>
              <li>
                {isLoggedIn ? (
                  <button onClick={handleSignOut} className="text-black">
                    Sign out
                  </button>
                ) : (
                  <Link to="/login" className="text-text-black">
                    Sign in
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <p className="border-b-2"></p>
        </div>

        {/* Back button functionality */}
        <div className="max-w-7xl flex items-center justify-between mx-auto p-4 space-y-4 ">
          <p
            className="underline text-[#1d70b8] cursor-pointer flex items-center gap-2"
            onClick={() => navigate(-1)} // Go back to the previous page
          >
            <img src="/back.png" alt="Back" className="w-4 h-4" /> Back
          </p>

          <p className="text-end">
            English | <span className="underline text-[#1d70b8]">Cymraeg</span>
          </p>
        </div>
      </>
    </div>
  );
};

export default Nav2;
