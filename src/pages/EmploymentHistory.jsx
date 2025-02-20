import { Link } from "react-router-dom";
import Nav5 from "../components/Nav/Nav5";

const EmploymentHistory = () => {
  return (
    <div>
      <Nav5 />
      <div className="max-w-7xl mx-auto space-y-4 p-10 md:p-5 lg:p-0">
        <div className="flex justify-between gap-10">
          <div>
            <div className="pt-[50px] mb-[50px]">
              <h2 className="text-4xl font-bold">
                Get Proof of Employment <br /> History
              </h2>
            </div>

            <p className="text-[1.1875rem] font-[400] mb-4">
              You can ask HM Revenue and Customs (HMRC) for a record of your <br />
              employment history, for example if you’re:
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li className="text-[1.1875rem] font-[400]">
                Making a compensation claim (for example for an industrial
                injury, road <br /> traffic accident, or medical negligence claim)
              </li>
              <li className="text-[1.1875rem] font-[400]">Applying for a loan</li>
              <li className="text-[1.1875rem] font-[400]">Renewing a work visa</li>
            </ul>
            <p className="text-[1.1875rem] font-[400] mt-6">
              You can find this information yourself or get a{" "}
              <span className="underline text-[#1d70b8]">legal adviser</span> or
              <span className="underline text-[#1d70b8]"> tax agent</span> to do
              it for you.
            </p>
          </div>
     
          <div className="space-y-4">
          <p className="border-t-2 border-[#1d70b8] w-1/2"></p>
            <h1 className="text-[1.1875rem] font-bold">Related content</h1>
            <p className="underline text-[#1d70b8] text-[1.1875rem] font-[400]">
              Check your National Insurance record
            </p>
            <p className="underline text-[#1d70b8] text-[1.1875rem] font-[400]">
              Request your employment history from National Insurance records
            </p>
            <p className="underline text-[#1d70b8] text-[1.1875rem] font-[400]">
              Claim compensation if you were the victim of a violent crime
            </p>
          </div>
        </div>

        <p className="text-[1.1875rem] font-[400] mt-4">
          This guide is also available{" "}
          <span className="underline text-[#1d70b8]">in Welsh (Cymraeg)</span>.
        </p>

        <h3 className="text-[1.6875rem] font-bold mb-6 mt-6">
          How to Get Your Employment History
        </h3>
        <p className="text-[1.1875rem] font-[400] mt-4">
          You can get a record of the current and past 5 years’ employment using:
        </p>
        <ul className="list-disc pl-8 mt-4">
          <li className="text-[1.1875rem] font-[400]">
            Your{" "}
            <span className="underline text-[#1d70b8] selection:bg-yellow-300  active:bg-yellow-300">
              <Link to={"/login"}>  personal tax account</Link>
            </span>
          </li>
          <li className="underline text-[#1d70b8] text-[1.1875rem] font-[400]">
            The HMRC app
          </li>
        </ul>

        <p className="text-[1.1875rem] font-[400] mt-4">
          Once you’ve signed in, you’ll need to navigate to your Pay As You Earn
          (PAYE) <br /> Income Tax records to get your employment history.
        </p>

        <h3 className="text-[1.1875rem] font-bold mt-6">
          Apply Using a Paper Form
        </h3>
        <p className="text-[1.1875rem] font-[400] mt-4">
          You can also fill in the{" "}
          <span className="underline text-[#1d70b8]">application form</span> for
          a record from any year and send it <br /> to HMRC. The address is on
          the form.
        </p>

        <p className="text-[1.1875rem] font-[400] mt-4">
          If you’re applying through a legal adviser or tax agent, you’ll first
          need to give <br /> them written consent. Use the{" "}
          <span className="underline text-[#1d70b8]">
            employment history consent
          </span>
          form. They’ll <br /> include your consent with your application.
        </p>

        <h3 className="text-[1.6875rem] font-bold mt-6">
          Apply for an Employment History on Behalf of <br /> Someone Who Has
          Died
        </h3>
        <p className="text-[1.1875rem] font-[400] mt-4">
          You can apply to get the employment history of someone who’s died if
          you’re <br /> legally entitled to claim damages{" "}
          <span className="underline text-[#1d70b8]">
            on behalf of their estate
          </span>
          :
        </p>
        <ul className="list-disc pl-8 mt-4">
          <li className="text-[1.1875rem] font-[400]">
            As part of a claim for personal injury or a fatal accident
          </li>
          <li className="text-[1.1875rem] font-[400]">
            Under the{" "}
            <span className="underline text-[#1d70b8]">
              Diffuse Mesothelioma Payment Scheme
            </span>
          </li>
        </ul>

        <p className="text-[1.1875rem] font-[400] mt-4">
          To apply, fill in the request employment history about a deceased
          person form and send it to HMRC. The address is on the form.
        </p>

        <p className="text-[1.1875rem] font-[400] mt-4">
          If a professional representative (for example a solicitor or coroner)
          gave you the form, fill it in and return it to them.
        </p>

        <h3 className="text-[1.6875rem] font-bold mt-6">After You’ve Applied</h3>
        <p className="text-[1.1875rem] font-[400] mt-4">
          Contact the{" "}
          <span className="underline text-[#1d70b8]">
            {" "}
            National Insurance: general enquiries helpline{" "}
          </span>{" "}
          if you have not heard from HMRC after 40 days.
        </p>

        <h3 className="text-2xl font-semibold mt-6">Explore the Topic</h3>
        <p className="text-[1.1875rem] font-[400] mt-4">
          <strong className="underline text-[#1d70b8]">
            National Insurance
          </strong>
        </p>
      </div>
    </div>
  );
};

export default EmploymentHistory;
