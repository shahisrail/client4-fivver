import Nav2 from "../components/Nav/Nav2";

const InsureanceNumber = () => {
  return (
    <div>
      <Nav2 />
      <div className="max-w-7xl mx-auto space-y-4 p-10 md:p-5 lg:p-0 lg:pb-[40px] lg:pt-[40px]">
        <div>
          <h2 className="lg:text-[2.25rem] font-bold lg:mb-[15px]">
            Save your National Insurance number
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <p className="border-r-[5px] border-gray-500 h-10"></p>
          <h4 className="text-[1.1875rem]">
            Your National Insurance number is <span className="font-bold">JX 88 73 26 C</span>
          </h4>
        </div>

        {/* Benefits Section */}
        <div className="py-4 space-y-4">
          <p className="text-[1.1875rem] leading-relaxed font-semibold text-black">
            You may be asked for your National Insurance number when you start paid 
            work, apply for a student loan or claim state benefits.
          </p>
          <p className="text-[1.1875rem] leading-relaxed font-semibold text-black">
            So that you have your number when you need it, these are your options.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold py-5">
            Save your number to your phone's wallet
          </h2>
          <ul className="list-disc list-inside space-y-2  ">
            <li>
              <span className="text-[#1d70b8] underline">Google Wallet</span>
            </li>
            <li>
              <span className="text-[#1d70b8] underline">Apple Wallet</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            View and get a copy of your National Insurance number letter
          </h2>
          <ul className="list-disc list-inside py-5 space-y-2">
            <li>
              <span className="text-[#1d70b8] underline">View or print</span>
            </li>
            <li>
              <span className="text-[#1d70b8] underline">Save as a PDF</span>
            </li>
          </ul>
        </div>
        <p className="border-b-2 w-1/2"></p>
        <p className="text-[1.1875rem] leading-relaxed text-[#1d70b8] underline py-4">
          Is the page not working properly? (opens in new tab)
        </p>
      </div>
    </div>
  );
};

export default InsureanceNumber;
