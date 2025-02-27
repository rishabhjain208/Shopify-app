import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { AppProvider, Frame, Navigation } from "@shopify/polaris";
import {
  HomeFilledIcon,
  TextIndentIcon,
  DataTableIcon,
} from "@shopify/polaris-icons";
import SurveyForm from "./components/SurveyForm";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <AppProvider>
      <Router>
        <MainLayout />
      </Router>
    </AppProvider>
  );
}

function MainLayout() {
  const navigate = useNavigate();

  return (
    <Frame
      navigation={
        <Navigation location={window.location.pathname}>
          <Navigation.Section
            items={[
              {
                label: "Home",
                icon: HomeFilledIcon,
                onClick: () => navigate("/"), // Fix navigation
              },
              {
                label: "Survey",
                icon: TextIndentIcon,
                onClick: () => navigate("/survey"),
              },
              {
                label: "Dashboard",
                icon: DataTableIcon,
                onClick: () => navigate("/dashboard"),
              },
            ]}
          />
        </Navigation>
      }
    >
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<SurveyForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Frame>
  );
}

export default App;
