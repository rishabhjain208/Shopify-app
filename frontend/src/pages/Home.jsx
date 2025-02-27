import {
  Page,
  Card,
  Button,
  Layout,
  TextContainer,
  Image,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Shopify_logo_2018.svg.png";
// "E:\causalfunnel-shopify-app\frontend\src\assets\Shopify_logo_2018.svg.png"
export default function Home() {
  const navigate = useNavigate();

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <TextContainer>
                <h1 className="text-3xl font-semibold text-gray-700">
                  Welcome to Your Shopify App
                </h1>
                <p className="text-gray-600 mt-2">
                  This app helps you collect customer feedback through surveys
                  and analyze responses to improve your business.
                </p>
              </TextContainer>
              <div className="flex justify-center mt-4">
                <img
                  src={logo} // Public folder access
                  alt="Welcome illustration"
                  width={250}
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center mt-4"
              >
                <Button
                  primary
                  size="large"
                  onClick={() => navigate("/survey")}
                >
                  Start Survey
                </Button>
              </motion.div>
            </Card>
          </Layout.Section>
        </Layout>
      </motion.div>
    </Page>
  );
}
