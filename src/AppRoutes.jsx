import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Solutions from "./pages/Solutions";
import Products from "./Grid/Products";
import Services from "./pages/Services";
import MobileBankingSolution from "./Solutiondroplist/mobliebanksolution";
import RemittanceSolution from "./Solutiondroplist/remittancesolutions";
import DigitalWallet from "./Solutiondroplist/digitalwallet";
import PaymentGateway from "./Solutiondroplist/paymentgateway";
import CurrencyExchange from "./Solutiondroplist/CurrencyExchange";
import CardIssuing from "./Solutiondroplist/CardIssuing";
import CrowdFunding from "./Solutiondroplist/CrowdFunding";
import InvestmentManagement from "./Solutiondroplist/InvestmentManagement";
import Escrow from "./Solutiondroplist/escrow";
import AIchatbot from "./Solutiondroplist/AIchatbot";
import OnlineBooking from "./Solutiondroplist/OnlineBooking";
import MultiVendor from "./Solutiondroplist/MultiVendor";
import Installation from "./Servicesdropdownlist/Installation";
import Fintech from "./Servicesdropdownlist/Fintech";
import MobileDevelopment from "./Servicesdropdownlist/MobileDevelopment";
import WebDevelopment from "./Servicesdropdownlist/WebDevelopment";
import Uidesign from "./Servicesdropdownlist/Uidesign";
import Quality from "./Servicesdropdownlist/Quality";
import Cloud from "./Servicesdropdownlist/Cloud";
import Devops from "./Servicesdropdownlist/Devops";
import Maintenance from "./Servicesdropdownlist/Maintenance";
import Aboutus from "./Companydropdownlist/Aboutus";
import Mission from "./Companydropdownlist/Mission";
import Vision from "./Companydropdownlist/Vision";
import Team from "./Companydropdownlist/Team";
import Lifeappdevs from "./Companydropdownlist/Lifeappdevs";
import FAQSection from "./Companydropdownlist/FAQSection";
import Documentation from "./Helpdropdownlist/Documentation";
import Sales from "./Helpdropdownlist/Sales";
import Techincal from "./Helpdropdownlist/Techincal";
import Customization from "./Helpdropdownlist/Customization";
import Consultation from "./Helpdropdownlist/Consultation";
import ProductKeyForm from "./Helpdropdownlist/ProductKeyForm";
import ContactSection from "./pages/ContactSection";
import Login from "./pages/Login";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./Policy/PrivacyPolicy";
import TermsAndConditions from "./Policy/Terms";
import InstallationPolicy from "./Policy/Install";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />

      {/* Solutions Routes */}
      <Route path="/solutions/mobile-banking-solutions" element={<MobileBankingSolution />} />
      <Route path="/solutions/remittance-solution" element={<RemittanceSolution />} />
      <Route path="/solutions/digital-wallet-solutions" element={<DigitalWallet />} />
      <Route path="/solutions/white-label-payment-gateway-solutions" element={<PaymentGateway />} />
      <Route path="/solutions/currency-exchange-solutions" element={<CurrencyExchange />} />
      <Route path="/solutions/card-issuing-solutions" element={<CardIssuing />} />
      <Route path="/solutions/crowdfunding-solutions" element={<CrowdFunding />} />
      <Route path="/solutions/investment-management-solutions" element={<InvestmentManagement />} />
      <Route path="/solutions/escrow-solutions" element={<Escrow />} />
      <Route path="/solutions/ai-chatbot-solutions" element={<AIchatbot />} />
      <Route path="/solutions/online-booking-solutions" element={<OnlineBooking />} />
      <Route path="/solutions/multi-vendor-solutions" element={<MultiVendor />} />

      {/* Services Routes */}
      <Route path="/services/installation-service" element={<Installation />} />
      <Route path="/services/fintech-software-development" element={<Fintech />} />
      <Route path="/services/mobile-application-development" element={<MobileDevelopment />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/ui-ux-design" element={<Uidesign />} />
      <Route path="/services/quality-assurance-testing" element={<Quality />} />
      <Route path="/services/cloud-services" element={<Cloud />} />
      <Route path="/services/devops-services" element={<Devops />} />
      <Route path="/services/maintenance-and-support" element={<Maintenance />} />

      {/* Company & Other Pages */}
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/our-mission" element={<Mission />} />
      <Route path="/our-vision" element={<Vision />} />
      <Route path="/join-our-team" element={<Team />} />
      <Route path="/life-at-appdevs" element={<Lifeappdevs />} />
      <Route path="/faq" element={<FAQSection />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/sales-support" element={<Sales />} />
      <Route path="/technical-support" element={<Techincal />} />
      <Route path="/customization" element={<Customization />} />
      <Route path="/consultation" element={<Consultation />} />
      <Route path="/generate-product-key" element={<ProductKeyForm />} />
      <Route path="/contact" element={<ContactSection />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-conditions" element={<TermsAndConditions />} />
      <Route path="/installation-policy" element={<InstallationPolicy />} />
    </Routes>
    
  );
};

export default AppRoutes;
