import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Bussness = () => {
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <h2 className="text-2xl  md:text-4xl text-start font-bold  text-black">
          Bussness tax account
        </h2>
        <h5 className="text-[24px] text-gray-400">
          View and access your business taxes in one place
        </h5>
        <p className="border-b-2"></p>
        <p>
          <span className="font-semibold"> Add a tax to your account to</span>{" "}
          <a className="underline text-[#1d70b8]">
            get online access to a tax. duty or scheme.
          </a>
        </p>
        <p className="border-b-2"></p>
        <p className="font-semibold">
          Payments will take up to 7 working days to show, depending on how you
          pay. <br /> After you complete your return your tax calculation will
          take up to 2 days.
        </p>

        <div className="border-2 border-gray-300 p-4 space-y-4 ">
          <h2 className="text-2xl md:text-3xl text-start font-bold  text-black">
            Personal tax account
          </h2>
          <p>
            Use your personal tax account for non-business taxes and benefits.
          </p>
          <p> You can :</p>
          <ul className="list-disc list-inside">
            <li>manage your personal details</li>
            <li>
              view your Income Tax estimate and find out more about your tax
              code
            </li>
            <li>check how much Income Tax you paid last year</li>
            <li>claim a tax refund</li>
            <li>
              view your National Insurance record and State Pension forecast
            </li>
            <li> manage your tax credits</li>
          </ul>
          <p className="text-[#1d70b8] underline ">
            <Link to={"/personal-account"} className="selection:bg-yellow-300  active:bg-yellow-300">View your Personal Account</Link>{" "}
          </p>
        </div>
        <p className="border-b-2"></p>
        <h3 className="text-2xl font-bold">Other Service</h3>
        <p className="text-[#1d70b8] underline">
          {" "}
          Anti-money laundering supervision{" "}
        </p>
        <p className="border-b-2"></p>
        <p className="text-[#1d70b8] underline">
          {" "}
          Is the page not working properly? (opens in new tab){" "}
        </p>
      </div>
    </>
  );
};

export default Bussness;
