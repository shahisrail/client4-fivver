import { Link } from "react-router-dom";
import Nav2 from "../components/Nav/Nav2";

const PersonalAcount = () => {
  return (
    <div>
      <Nav2 />
      <div className="max-w-7xl mx-auto space-y-4 p-10 md:p-5 lg:p-0">
        <div className="border-4 border-[#1d70b8] mb-[50px]">
          <h2 className="bg-[#1d70b8] text-white text-1xl font-bold p-2">
            Important
          </h2>
          <h2 className="text-1xl md:text-2xl p-4">
            <span className="font-bold">Tax credits end on 5 April 2025</span>
            <span className="underline text-[#1d70b8]">
              {" "}
              Find out what to do if <br /> you claim tax credits
            </span>
          </h2>
        </div>
        <div>
          <h4 className="text-[1.6875rem] text-gray-400">Account home</h4>
          <h2 className="text-[2xl] md:text-[3rem]  font-bold">Paul Adeyemo</h2>
        </div>
        <div className="flex items-center space-x-4">
          <p className="border-r-[10px] border-gray-200 h-10"></p>
          <h4 className="text-[15px] md:text-[20px] text-[#1d70b8] underline">
            <Link className="selection:bg-yellow-300  active:bg-yellow-300" to="/save-your-incurance-number">
              {" "}
              View and save your National Insurance Number
            </Link>
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
          {/* First Group of Cards */}
          <div className="bg-[#f8f8f8]  transition-colors duration-300">
            <div className="card-body ">
              <h2 className="card-title font-semibold text-[#1d70b8] ">
                Latest News and Updates
              </h2>
              <p className="">
                <p className="text-[#1d70b8] underline ">
                  The HMRC app: manage your money and tax
                </p>
                <p className="text-[#1d70b8] underline ">
                  Your updated Annual Tax summary
                </p>
                <p className="text-[#1d70b8] underline ">
                  Do you need to pay the high Income Child Benefit Charge?
                </p>
                <p className="text-[#1d70b8] underline ">
                  Gaps in your National Insurance record, and how to check them
                </p>
              </p>
            </div>
          </div>
          <div className="bg-[#f8f8f8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white hover:underline">
                <Link className="hover:underline selection:bg-yellow-300  active:bg-yellow-300" to="/cheak-income-taxt">
                  {" "}
                  Pay As You Earn (PAYE)
                </Link>
              </h2>
              <p className="hover:text-white">
                Check or update the employment, pension, company benefits, or
                other income information used to work out your PAYE Income Tax
                and Tax Codes.
              </p>
            </div>
          </div>
          <div className="bg-[#f8f8f8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white">
                6 April 2023 to 5 April 2024
              </h2>
              <p className="hover:text-white">You owe £5,317.70.</p>
              <p className="hover:text-white">
                You should have paid by 31 January 2025, but you can still make
                a payment now.
              </p>
            </div>
          </div>
          <div className="bg-[#f8f8f8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white">
                6 April 2022 to 5 April 2023
              </h2>
              <p className="hover:text-white">
                You paid the right amount of tax.
              </p>
              <p className="hover:text-white">
                There is nothing more to pay for this year.
              </p>
            </div>
          </div>
          <div className="bg-[#f8f8f8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white">
                Your National Insurance and State Pension
              </h2>
              <p className="hover:text-white">
                View your National Insurance record, and view and save your
                National Insurance number.
              </p>
              <p className="hover:text-white">
                View your State Pension Summary, and pay for gaps in your
                National Insurance record.
              </p>
            </div>
          </div>
          <div className="bg-[#f8f8f8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white">
                View your Annual Tax Summary
              </h2>
              <p className="hover:text-white">
                View your tax and National Insurance contributions and find out
                how the government spends your taxes. This is for your
                information only.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-4">
          <h2 className="text-3xl text-start font-bold text-black">Benefits</h2>
          <p className="border-b-2"></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
          <div className="bg-[#f8f8f8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white">
                Tax credits
              </h2>
              <p className="hover:text-white">
                View your next payments and the people on your claim, and make
                changes to your claim.
              </p>
            </div>
          </div>
          <div className="bg-[#f8f8f8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white">
                Child Benefit
              </h2>
              <p className="hover:text-white">
                A payment to help with the cost of bringing up children.
              </p>
            </div>
          </div>
          <div className="bg-[#f8f8f8] hover:bg-[#2D5CA5] hover:text-white transition-colors duration-300">
            <div className="card-body">
              <h2 className="card-title font-semibold text-[#1d70b8] hover:text-white">
                Marriage Allowance
              </h2>
              <p className="hover:text-white">
                Transfer part of your Personal Allowance to your partner so they
                pay less tax.
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

export default PersonalAcount;
