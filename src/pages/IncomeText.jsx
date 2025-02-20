import { Link } from "react-router-dom";
import Nav2 from "../components/Nav/Nav2";

const IncomeText = () => {
  return (
    <div>
      <Nav2 />
      <div className="max-w-7xl mx-auto space-y-4 p-10 md:p-5 lg:p-0">
        <div className="border-4 border-[#1d70b8]">
          <h2 className="bg-[#1d70b8] text-white text-1xl font-bold p-2">
            Important
          </h2>
          <h2 className="text-2xl p-6 ">
            <span className="font-bold">
              We changed your tax code on 17 December 2024. <br />
            </span>
            <span className="underline text-[#1d70b8] my-6">
              {" "}
              View your latest tax code change
            </span>
          </h2>
        </div>
        <div className="py-10"> 
          <h4 className="text-[1.6875rem] text-gray-400">PAUL ADEYEMO</h4>
          <h2 className="text-2xl md:text-[3rem] font-bold">PAYE Income Tax overview</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
          <div className="bg-[#F9FBF8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body  border-2 border-gray-300">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white">
                Check current tax year
              </h2>
              <p className="hover:text-white">
                See how much taxable income you have received including company
                benefits and view your tax free amount for 6 April 2024 to 5
                April 2025.
              </p>
            </div>
          </div>
          <div className="bg-[#F9FBF8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body border-2 border-gray-300">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white hover:underline">
                <Link className="selection:bg-yellow-300  active:bg-yellow-300" to="/income-taxt-history">
                  {" "}
                  View and print Income Tax and employment history
                </Link>
              </h2>
              <p className="hover:text-white">
                Get a record of your employment and pensions history for the
                last 5 years.
              </p>
            </div>
          </div>
          <div className="bg-[#F9FBF8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body border-2 border-gray-300">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white">
                Check next tax year
              </h2>
              <p className="hover:text-white">
                View your tax codes and estimated PAYE Income Tax from
                employment and pensions for 6 April 2025 to 5 April 2026.
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-[#1d70b8] underline  py-4">
          {" "}
          Is the page not working properly? (opens in new tab){" "}
        </p>
      </div>
    </div>
  );
};

export default IncomeText;
