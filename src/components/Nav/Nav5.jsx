import { Link } from "react-router-dom";

const Nav5 = () => {
  return (
    <>
      <div className="bg-black ">
        <div className="text-white p-4 flex flex-wrap justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center text-2xl font-bold">
            {" "}
            <Link to={"/"}>
              <img
                src="/download.png"
                alt=""
                style={{
                  filter: "invert(100%) brightness(100%) contrast(100%)",
                }}
              />
            </Link>{" "}
          </div>
          <div>Government Gateway</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 space-y-4 ">
        <p className="text-end">
          English | <span className="underline text-[#1d70b8]">Cymraeg</span>
        </p>
      </div>
    </>
  );
};

export default Nav5;
