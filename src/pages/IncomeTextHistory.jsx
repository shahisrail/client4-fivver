import Nav3 from "../components/Nav/Nav3";

const IncomeTextHistory = () => {
  const incomeHistory = [
    {
      year: "6 April 2024 to 5 April 2025",
      entries: [
        {
          employer: "WSP UK LTD",
          reference: "581/MW909",
          startDate: "1 August 2022",
          endDate: "Not applicable",
          taxableIncome: "£37,113.40",
          taxPaid: "£6,687.59",
          taxCode: "K5598X",
        },
        {
          employer: "WSP UK LTD",
          reference: "581/MW909",
          startDate: "1 August 2022",
          endDate: "Not applicable",
          taxableIncome: "£43,533.81",
          taxPaid: "£6,190.80",
          taxCode: "Currently unavailable",
        },
      ],
    },
    {
      view: "View 2023 to 2024 tax year summary",
      year: "6 April 2022 to 5 April 2023",
      entries: [
        {
          employer: "WSP UK LTD",
          reference: "581/MW909",
          startDate: "1 August 2022",
          endDate: "Not applicable",
          taxableIncome: "£28,875",
          taxPaid: "£4,634.40",
          taxCode: "816LX",
        },
        {
          employer: "AVISON YOUNG (UK) LIMITED",
          reference: "68/G85",
          startDate: "25 April 2022",
          endDate: "25 July 2022",
          taxableIncome: "£11,307.70",
          taxPaid: "£1,741.80",
          taxCode: "Currently unavailable",
        },
        {
          employer: "INTERACTION RECRUITMENT PLC",
          reference: "126/I60",
          startDate: "9 May 2022",
          endDate: "21 August 2022",
          taxableIncome: "£71.25",
          taxPaid: "£14.20",
          taxCode: "Currently unavailable",
        },
      ],
    },
    {
      view: "View 2022 to 2023 tax year summary",
      year: "6 April 2021 to 5 April 2022",
      entries: [
        {
          employer: "AECOM LTD",
          reference: "951/O7068",
          startDate: "29 March 2021",
          endDate: "22 March 2022",
          taxableIncome: "£30,146.86",
          taxPaid: "£3,592",
          taxCode: "1189LXign",
        },
      ],
    },
    {
      view: "View 2021 to 2022 tax year summary",
      year: "6 April 2020 to 5 April 2021",
      entries: [
        {
          employer: "GIFFEN GROUP LIMITED",
          reference: "951/G7112",
          startDate: "20 January 2020",
          endDate: "31 July 2020",
          taxableIncome: "£8,702.56",
          taxPaid: "£906.40",
          taxCode: "Currently unavailable",
        },
        {
          employer: "CARNELL SUPPORT SERVICES LTD",
          reference: "586/C833",
          startDate: "3 August 2020",
          endDate: "19 March 2021",
          taxableIncome: "£18,060.04",
          taxPaid: "£3,607.40",
          taxCode: "K175X",
        },
        {
          employer: "AECOM LTD",
          reference: "951/O7068",
          startDate: "29 March 2021",
          endDate: "22 March 2022",
          taxCode: "Currently unavailable",
        },
      ],
    },
    {
      view: "View 2020 to 2021 tax year summary",
      year: "6 April 2019 to 5 April 2020",
      entries: [
        {
          employer: "GIFFEN GROUP LIMITED",
          reference: "951/G7112",
          startDate: "20 January 2020",
          endDate: "31 July 2020",
          taxableIncome: "£5,144.99",
          taxPaid: "£0",
          taxCode: "1250L",
        },
      ],
    },
  ];

  return (
    <div>
      <Nav3 />
      <div className="max-w-7xl mx-auto space-y-4 p-10 md:p-5 lg:p-0">
        <h2 className="md:text-[3rem] font-bold">PAYE Income Tax History</h2>
        <button
          onClick={() => window.print()}
          className="underline py-3 cursor-pointer"
        >
          Print this page
        </button>

        {incomeHistory.map((yearData, index) => (
          <div key={index} className="space-y-6 py-4">
            {yearData.view && (
              <button className="text-blue-600 underline text-lg font-semibold">
                {yearData.view}
              </button>
            )}
            <h2 className="font-bold text-[1.5rem]">{yearData.year}</h2>
            
            {yearData.entries.map((entry, i) => (
              <div key={i} className="border w-full md:w-1/2">
                <h2 className="bg-[#F3F2F1] p-5 text-[1.1875rem] text-black font-bold">
                  {entry.employer}
                </h2>
                <div className="p-2 space-y-2">
                  <div className="grid grid-cols-2 border-b border-black px-4 py-2">
                    <span className="font-semibold text-[1.3rem]">
                      Employer PAYE reference
                    </span>
                    <span className="text-[1.2rem]">{entry.reference}</span>
                  </div>
                  <div className="grid grid-cols-2 border-b border-black px-4 py-2">
                    <span className="font-semibold text-[1.3rem]">
                      Start date
                    </span>
                    <span className="text-[1.2rem]">{entry.startDate}</span>
                  </div>
                  <div className="grid grid-cols-2 border-b border-black px-4 py-2">
                    <span className="font-semibold text-[1.3rem]">
                      End date
                    </span>
                    <span className="text-[1.2rem]">{entry.endDate}</span>
                  </div>
                  {entry.taxableIncome && (
                    <div className="grid grid-cols-2 border-b border-black px-4 py-2">
                      <span className="font-semibold text-[1.3rem]">
                        Taxable income
                      </span>
                      <span className="text-[1.2rem]">
                        {entry.taxableIncome}
                      </span>
                    </div>
                  )}
                  {entry.taxPaid && (
                    <div className="grid grid-cols-2 border-b border-black px-4 py-2">
                      <span className="font-semibold text-[1.3rem]">
                        Income Tax paid
                      </span>
                      <span className="text-[1.2rem]">{entry.taxPaid}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 border-b border-black px-4 py-2">
                    <span className="font-semibold text-[1.3rem]">
                      Tax code
                    </span>
                    <span className="text-[1.2rem]">{entry.taxCode}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        <p className="text-blue-600 py-5 underline text-lg font-semibold">
          {" "}
          View 2019 to 2020 tax year summary
        </p>
        <p className="text-[#1d70b8] underline font-medium py-4">
          {" "}
          Is the page not working properly? (opens in new tab){" "}
        </p>
      </div>
    </div>
  );
};

export default IncomeTextHistory;
