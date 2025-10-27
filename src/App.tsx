import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import CarePlanSuite from './pages/CarePlanSuite';
import { BrightnessProvider } from './contexts/BrightnessContext';
import { ThemeProvider } from './contexts/ThemeContext';
import HelpCenter from './pages/HelpCenter';
import ContactSupport from './pages/ContactSupport';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import MedicalDisclaimer from './pages/MedicalDisclaimer';
import RefundPolicy from './pages/RefundPolicy';
import AboutPage from './pages/About';
import MissionPage from './pages/Mission';
import SecurityCompliancePage from './pages/SecurityCompliance';

function App() {
  return (
    <ThemeProvider>
      <BrightnessProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/gp-care-plan-generator" 
            element={<CarePlanSuite />} 
          />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/security-compliance" element={<SecurityCompliancePage />} />
        </Routes>
      </BrightnessProvider>
    </ThemeProvider>
  );
}

export default App;
