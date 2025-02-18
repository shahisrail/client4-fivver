import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="bg-black ">
        <div className="text-white p-4 flex flex-wrap justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center text-2xl font-bold">
            {" "}
            <Link to={"/"}>GOV.UK</Link>{" "}
          </div>
          <div>Government Gateway</div>
          <div>Sign out</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 space-y-4 ">
        <nav className=" flex items-center">
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
              <a href="#">Help and Contact </a>
            </li>
          </ul>
        </nav>
        <p className="border-b-2"></p>
      </div>
      <div className="max-w-7xl mx-auto p-4 space-y-4 ">
        <p className="text-end">
          English | <span className="underline text-[#1d70b8]">Cymraeg</span>
        </p>
      </div>
    </>
  );
};

export default Nav;
