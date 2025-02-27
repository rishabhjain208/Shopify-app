import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Page,
  Card,
  TextField,
  Button,
  Toast,
  Frame,
  FormLayout,
  Banner,
  Icon,
  Layout,
  LegacyStack,
  Text,
  Spinner,
} from "@shopify/polaris";
import { StarFilledIcon, EditIcon } from "@shopify/polaris-icons";
import { motion } from "framer-motion";
import { submitSurvey } from "../api";
import logo from "../assets/Shopify_logo_2018.svg.png";

export default function SurveyForm() {
  const [answers, setAnswers] = useState({ q1: "", q2: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!answers.q1 || answers.q1 < 1 || answers.q1 > 5) {
      setError("⚠️ Please rate between 1 and 5.");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      await submitSurvey("12345", answers);
      setShowToast(true);
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      setError("⚠️ Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const dismissToast = useCallback(() => setShowToast(false), []);

  return (
    <Frame>
      <Page title="📢 Customer Feedback">
        <Layout>
          {/* Shopify Logo Centered */}
          <Layout.Section>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <img
                src={logo}
                alt="Shopify Logo"
                className="w-32 rounded-lg shadow-md"
              />
            </motion.div>
          </Layout.Section>

          <Layout.Section>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card sectioned>
                <FormLayout>
                  {/* Error Message */}
                  {error && (
                    <Banner status="critical">
                      <Text as="p">{error}</Text>
                    </Banner>
                  )}

                  {/* Rating Input */}
                  <LegacyStack alignment="center" spacing="tight">
                    <Icon source={StarFilledIcon} color="highlight" />
                    <TextField
                      label="Rate your experience (1-5)"
                      type="number"
                      min="1"
                      max="5"
                      value={answers.q1}
                      onChange={(value) =>
                        setAnswers({ ...answers, q1: value })
                      }
                      autoComplete="off"
                      // helpText="1 = Poor, 5 = Excellent"
                    />
                  </LegacyStack>

                  {/* Feedback Input */}
                  <LegacyStack alignment="center" spacing="tight">
                    <Icon source={EditIcon} color="base" />
                    <TextField
                      label="Your Suggestions"
                      type="text"
                      value={answers.q2}
                      onChange={(value) =>
                        setAnswers({ ...answers, q2: value })
                      }
                      fullWidth
                      multiline={3}
                      autoComplete="off"
                      helpText="Your feedback helps us improve!"
                    />
                  </LegacyStack>

                  {/* Submit Button with Motion & Spinner */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <Button
                      primary
                      size="large"
                      // primary
                      // style={{ width: "550px" }}
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Spinner size="small" />
                      ) : (
                        "Submit Feedback"
                      )}
                    </Button>
                  </motion.div>
                </FormLayout>
              </Card>
            </motion.div>
          </Layout.Section>
        </Layout>

        {/* Success Toast Notification */}
        {showToast && (
          <Toast
            content="✅ Feedback submitted successfully!"
            onDismiss={dismissToast}
          />
        )}
      </Page>
    </Frame>
  );
}
