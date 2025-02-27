import { useEffect, useState } from "react";
import { getSurveys } from "../api";
import { motion } from "framer-motion";
import {
  Page,
  Card,
  DataTable,
  Layout,
  Text,
  Banner,
  Spinner,
  Icon,
} from "@shopify/polaris";
import { PersonIcon, StarFilledIcon } from "@shopify/polaris-icons";
import logo from "../assets/Shopify_logo_2018.svg.png";
export default function Dashboard() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSurveys()
      .then((res) => {
        if (res.data.length === 0) {
          setError("No survey responses found. 😔");
        } else {
          setRows(
            res.data.map((item, index) => [
              index + 1,
              item.customerId,
              item.answers.q1 ? `⭐ ${item.answers.q1}/5` : "No rating",
              item.answers.q2 || "No comments",
            ])
          );
        }
      })
      .catch(() => setError("Failed to load survey responses."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Page title="📊 Survey Dashboard">
      <Layout.Section>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src={logo} alt="Shopify Logo" style={{ width: "120px" }} />
        </div>
      </Layout.Section>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {loading ? (
                <div className="flex justify-center items-center py-10">
                  <Spinner size="large" />
                </div>
              ) : error ? (
                <Banner title="Oops!" status="critical">
                  <Text>{error}</Text>
                </Banner>
              ) : (
                <DataTable
                  columnContentTypes={["numeric", "text", "text", "text"]}
                  headings={["ID", "Customer", "Rating", "Feedback"]}
                  rows={rows}
                />
              )}
            </motion.div>
          </Card>
        </Layout.Section>

        <Layout.Section secondary>
          {/* Survey Summary */}
          <Card>
            <div className="flex flex-col items-start p-5 space-y-2">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Icon source={PersonIcon} color="indigo" />
                </div>
                <div>
                  <Text variant="headingMd" as="h2" fontWeight="bold">
                    {loading ? <Spinner size="small" /> : rows.length}
                  </Text>
                  <Text variant="bodyMd" color="subdued">
                    Total Survey Responses
                  </Text>
                </div>
              </div>
            </div>
          </Card>

          {/* Customer Satisfaction */}
          <Card>
            <div className="flex flex-col items-start p-5 space-y-2">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Icon source={StarFilledIcon} color="yellow" />
                </div>
                <div>
                  <Text variant="headingMd" as="h2" fontWeight="bold">
                    {loading ? <Spinner size="small" /> : "4.5/5 ⭐"}
                  </Text>
                  <Text variant="bodyMd" color="subdued">
                    Average Customer Rating
                  </Text>
                </div>
              </div>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

// import { useEffect, useState } from "react";
// import { Page, Card, DataTable, Spinner, Text, Banner } from "@shopify/polaris";
// import { getSurveys } from "../api";

// export default function Dashboard() {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getSurveys()
//       .then((res) => {
//         if (res.data.length === 0) {
//           setError("No survey responses found.");
//         }
//         setRows(
//           res.data.map((item, index) => [
//             index + 1,
//             item.customerId,
//             JSON.stringify(item.answers, null, 2), // Pretty print JSON
//           ])
//         );
//       })
//       .catch(() => setError("Failed to load survey responses."))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <Page title="📊 Survey Responses">
//       <Card sectioned>
//         {loading ? (
//           <div className="flex justify-center items-center py-10">
//             <Spinner size="large" />
//           </div>
//         ) : error ? (
//           <Banner title="Oops!" status="critical">
//             <Text>{error}</Text>
//           </Banner>
//         ) : (
//           <DataTable
//             columnContentTypes={["numeric", "text", "text"]}
//             headings={["📌 ID", "👤 Customer", "📋 Answers"]}
//             rows={rows}
//             footerContent={`Total responses: ${rows.length}`}
//           />
//         )}
//       </Card>
//     </Page>
//   );
// }
