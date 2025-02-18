import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Nav3 from "../components/Nav/Nav3";

// Define styles for the PDF to match your UI design
const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "white",
  },
  sectionHeader: {
    color: "black",
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionContent: {
    marginBottom: 20,
    padding: 10,
    border: "2px solid #B1B1B1",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  flexRowHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#B1B1B1",
    paddingBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
    padding: 8,
  },
  boldText2: {
    fontWeight: "bold",
    padding: 8,
  },
  boldText3: {
    fontWeight: "bold",
    padding: 18,
    marginTop: 30,
  },
  underlineText: {
    color: "#1d70b8",
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

const IncomeTextHistoryPDF = () => {
  return (
    <Document>
      <Page style={styles.page}>
        {/* Updated Heading Section */}
        <View style={styles.flexRowHeading}>
          <View>
            <Text style={styles.boldText2}>
              Hm Revenue <br /> Customs
            </Text>
          </View>
          <View>
            <Text style={styles.boldText2}>PAUL ADEYEMO</Text>
          </View>
        </View>

        <Text style={styles.boldText3}>PAYE details for PAUL ADEYEMO</Text>
        <Text style={styles.boldText2}>
          Address: 24 RIDGEHURST AVENUE WATFORD WD25 7AY
        </Text>
        <Text style={styles.boldText2}>National Insurance: JX 88 73 26 C</Text>

        <Text style={styles.boldText2}>6 April 2024 to 5 April 2025</Text>

        {/* First Section */}
        <View style={styles.sectionContent}>
          <Text style={styles.sectionHeader}>WSP UK LTD</Text>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Employer PAYE reference</Text>
            <Text>581/MW909</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Start date</Text>
            <Text>1 August 2022</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>End date</Text>
            <Text>Not applicable</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Taxable income</Text>
            <Text>£37,113.40</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Income Tax paid</Text>
            <Text>£6,687.59</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Tax code</Text>
            <Text>K5598X</Text>
          </View>
        </View>

        {/* Second Section */}
        <View style={styles.sectionContent}>
          <Text style={styles.sectionHeader}>
            OMEGA ENVIRONMENTAL SERVICES LIMITED
          </Text>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Employer PAYE reference</Text>
            <Text>475/WA74651</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Start date</Text>
            <Text>22 September 2022</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>End date</Text>
            <Text>31 July 2024</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Taxable income</Text>
            <Text>£21,029.49</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Income Tax paid</Text>
            <Text>£4,221.06</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Tax code</Text>
            <Text>Currently unavailable</Text>
          </View>
        </View>

        {/* Third Section */}
        <View style={styles.sectionContent}>
          <Text style={styles.sectionHeader}>CANAL & RIVER TRUST</Text>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Employer PAYE reference</Text>
            <Text>120/TA76245</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Start date</Text>
            <Text>2 September 2024</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>End date</Text>
            <Text>Not applicable</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Taxable income</Text>
            <Text>£19,888.10</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Income Tax paid</Text>
            <Text>£2,870.74</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.boldText}>Tax code</Text>
            <Text>DOX</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const IncomeTextHistory = () => {
  return (
    <div>
      <Nav3 />
      <div className="max-w-7xl mx-auto space-y-4 p-10 md:p-5 lg:p-0">
        <div>
          <h2 className="md:text-4xl font-bold">PAYE Income Tax History</h2>
        
          <PDFDownloadLink
            document={<IncomeTextHistoryPDF />}
            fileName="Income_Tax_History.pdf"
          >
            {({ loading }) =>
              loading ? (
                <button className="bg-[#1d70b8] text-white p-2 rounded mt-4">
                  Loading PDF...
                </button>
              ) : (
                <button className="underline py-3 cursor-pointer">
                  Print this page
                </button>
              )
            }
          </PDFDownloadLink>
          <h6 className="underline py-3 text-[#1d70b8]">
            PAYE Details for PAUL ADEYEMO
          </h6>
        </div>
        <div className="space-y-6 py-4">
          <h2 className="font-bold text-2xl">6 April 2024 to 5 April 2025</h2>

          {/* Content */}
          <div id="pdf-content">
            {/* First Section */}
            <div className="border w-full md:w-1/2 ">
              <h2 className="bg-gray-400 p-2 text-white">WSP UK LTD</h2>
              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Employer PAYE reference</span>
                  <span>581/MW909</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Start date</span>
                  <span>1 August 2022</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">End date</span>
                  <span>Not applicable</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Taxable income</span>
                  <span>£37,113.40</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Income Tax paid</span>
                  <span>£6,687.59</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Tax code</span>
                  <span>K5598X</span>
                </div>
              </div>
            </div>
            {/* Other sections */}
          </div>
        </div>
        <div className="space-y-6 py-4">
         

          {/* Content */}
          <div id="pdf-content">
            {/* First Section */}
            <div className="border w-full md:w-1/2 ">
              <h2 className="bg-gray-400 p-2 text-white">OMEGA ENVIRONMENTAL SERVICES LIMITED</h2>
              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Employer PAYE reference</span>
                  <span>475/WA74651</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Start date</span>
                  <span>22 September 2022</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">End date</span>
                  <span>31 July 2024</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Taxable income</span>
                  <span>£21,029.49</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Income Tax paid</span>
                  <span>£4,221.06</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Tax code</span>
                  <span>Currently unavailable</span>
                </div>
              </div>
            </div>
            {/* Other sections */}
          </div>
        </div>
        <div className="space-y-6 py-4">
         

          {/* Content */}
          <div id="pdf-content">
            {/* First Section */}
            <div className="border w-full md:w-1/2 ">
              <h2 className="bg-gray-400 p-2 text-white">CANAL & RIVER TRUS</h2>
              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Employer PAYE reference</span>
                  <span>120/TA76245</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Start date</span>
                  <span>22 September 2024</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">End date</span>
                  <span>Not applicable</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Taxable income</span>
                  <span>£19,888.10</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Income Tax paid</span>
                  <span>£2,870.74</span>
                </div>
              </div>

              <div className="py-4 p-2 border-b-2">
                <div className="flex justify-between">
                  <span className="font-bold">Tax code</span>
                  <span>DOX</span>
                </div>
              </div>
            </div>
            {/* Other sections */}
          </div>
        </div>
        {/* PDF download button */}
        {/* <PDFDownloadLink
          document={<IncomeTextHistoryPDF />}
          fileName="Income_Tax_History.pdf"
        >
          {({ loading }) =>
            loading ? (
              <button className="bg-[#1d70b8] text-white p-2 rounded mt-4">
                Loading PDF...
              </button>
            ) : (
              <button className="bg-[#1d70b8] text-white p-2 rounded mt-4">
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink> */}
      </div>
    </div>
  );
};

export default IncomeTextHistory;
