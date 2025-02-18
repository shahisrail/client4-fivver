import { Link, useNavigate } from "react-router-dom";

const Nav2 = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div>
      <>
        <div className="bg-black ">
          <div className="text-white p-4 flex flex-wrap justify-between items-center max-w-7xl mx-auto gap-3 lg:gap-[400px]">
            <div className=" text-2xl font-bold">
              <Link to={"/"}>GOV.UK</Link>{" "}
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
                <a href="#">Sign out</a>
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
