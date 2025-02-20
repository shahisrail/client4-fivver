import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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
    <>
      <div className="bg-black">
        <div className="text-white p-4 flex flex-wrap justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center text-2xl font-bold">
          <Link to={`/bussness/${encodeURIComponent("")}`}>
              {" "}
              <img src="/download.png" alt="" style={{ filter: 'invert(100%) brightness(100%) contrast(100%)' }} />

            </Link>
          </div>
          <div>Government Gateway</div>
          <div>
            {isLoggedIn ? (
              <button onClick={handleSignOut} className="text-white">
                Sign out
              </button>
            ) : (
              <Link to="/login" className="text-white">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <nav className="flex items-center">
          <ul className="flex gap-4 flex-wrap">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Manage account</a>
            </li>
            <li>
              <a href="#">Message</a>
            </li>
            <li>
              <a href="#">Help and Contact</a>
            </li>
          </ul>
        </nav>
        <p className="border-b-2"></p>
      </div>
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <p className="text-end">
          English | <span className="underline text-[#1d70b8]">Cymraeg</span>
        </p>
      </div>
    </>
  );
};

export default Nav;
