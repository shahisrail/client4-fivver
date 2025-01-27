const OrganizationStats = () => {
  const headcount = 4228;
  const directs = 9;
  const orgDepth = 8;

  const chartData = [
    {
      title: (
        <>
          Percentile Corporate <br /> Leaders
        </>
      ),
      values: [
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
      ], // Example data
    },
    {
      title: (
        <>
          Percentile Operations <br /> LOB Leaders
        </>
      ),
      values: [
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
      ], // Example data
    },
    {
      title: (
        <>
          Percentile sf Bay <br /> Area Leaders
        </>
      ),
      values: [
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
      ], // Example data
    },
  ];

  return (
    <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-8 font-bold  justify-around font-sans p-6">
      {/* Organization Table */}
      <div className=" border-gray-300 rounded-lg overflow-hidden pt-[44px]">
        <table className="table-auto w-full text-left ">
          <thead className=" text-gray-700">
            <tr>
              <th className="px-4 text-[20px] py-2">Organization</th>
              <th className="border-l-2 border-black px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-2 border-black">
              <td className="px-4 py-2">Headcount</td>
              <td className="border-l-2 border-black px-4 py-2">{headcount}</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">Directs</td>
              <td className="border-l-2 border-black px-4 py-2">{directs}</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">Org Depth</td>
              <td className="border-l-2 border-black px-4 py-2">{orgDepth}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Percentile Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
        {chartData.map((chart, index) => (
          <div key={index} className="text-center p-4">
            <h4 className="text-xl  mb-4 font-bold" >{chart.title}</h4>
            <h4 className="text-sm  mb-4 font-bold" >50Th</h4>

            <div className="overflow-x-auto">
              <div className="border-t-2 border-black overflow-hidden">
                <table className="table-auto w-full border border-gray-300  text-center">
                  <tbody>
                    {/* Manually creating 3 rows */}
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-4 border-r border-gray-300">
                        <div
                          className={`${
                            chart.values[4]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                      <td className="px-4 py-4 border-r-2 border-black">
                        <div
                          className={`${
                            chart.values[4]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                      <td className="px-4 py-4 border-r border-gray-300">
                        <div
                          className={`${
                            chart.values[4]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                      <td className="px-4 py-4">
                        <div
                          className={`w-4 h-4 rounded-full font-bold mx-auto border-2  ${
                            chart.values[3]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-4 border-r border-gray-300">
                        <div
                          className={`${
                            chart.values[4]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                      <td className="px-4 py-4 border-r-2 border-black">
                        <div
                          className={`${
                            chart.values[4]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                      <td className="px-4 py-4 border-r border-gray-300">
                        <div
                          className={`${
                            chart.values[4]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                      <td className="px-4 py-6 relative">
                        {" "}
                        <div
                          className={`w-4 h-4  absolute top-[20px] left-0 ml-[-9px] rounded-full font-bold border-2  ${
                            chart.values[7]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300 bg-gray-300"
                          }`}
                        ></div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="border-b border-gray-300">
                      <td className="px-3 py-4 border-r border-gray-300">
                        <div
                          className={`${
                            chart.values[4]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                      <td className="px-4 py-4 border-r-2 border-black">
                        <div
                          className={`${
                            chart.values[4]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                      <td className="px-4 py-4 border-r border-gray-300">
                        <div
                          className={`${
                            chart.values[4]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300"
                          }`}
                        ></div>
                      </td>
                      <td className="px-4 py-4">
                        <div
                          className={`w-4 h-4 rounded-full mx-auto border-2  ${
                            chart.values[11]
                              ? "border-[#7ABFF9] bg-[#7ABFF9]"
                              : "border-gray-300 bg-gray-300"
                          }`}
                        ></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationStats;
