import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About Pages
import Story from "./pages/about/Story";
import Team from "./pages/about/Team";
import Mission from "./pages/about/Mission";

// Services Pages
import Web from "./pages/domains/Web";
import Mobile from "./pages/domains/Mobile";
import Strategy from "./pages/domains/Strategy";
import Cloud from "./pages/domains/Cloud";

// Case Studies Pages
import Ecommerce from "./pages/case-studies/Ecommerce";
import Healthcare from "./pages/case-studies/Healthcare";
import Fintech from "./pages/case-studies/Fintech";
import DataEngineering from "./pages/services/dataengineering";
import DataVisualization from "./pages/services/datavisualizationanalytics";
import AIMachineLearning from "./pages/services/aimachinelearning";
import CloudInfrastructure from "./pages/services/cloudinfrastructure";
import UIUXDesign from "./pages/services/uxdesign";
import RealtimeDataStreaming from "./pages/services/realtimedata";
import Contact from "./components/Contact";
import ContactUs from "./pages/contactus";
import CaseStudies from "./pages/casestudies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <SiteHeader /> */}
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* About Routes */}
          <Route path="/about/story" element={<Story />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/mission" element={<Mission />} />

          {/* domains Routes */}
          <Route path="/domains/web" element={<Web />} />
          <Route path="/domains/mobile" element={<Mobile />} />
          <Route path="/domains/strategy" element={<Strategy />} />
          <Route path="/domains/cloud" element={<Cloud />} />

          {/* services Routes */}
          <Route
            path="/services/dataengineering"
            element={<DataEngineering />}
          />
          <Route
            path="/services/datavisualizationanalytics"
            element={<DataVisualization />}
          />
          <Route
            path="/services/aimachinelearning"
            element={<AIMachineLearning />}
          />
          <Route
            path="/services/cloudinfrastructure"
            element={<CloudInfrastructure />}
          />
          <Route path="/services/uxdesign" element={<UIUXDesign />} />
          <Route path="/services/realtimedata" element={<RealtimeDataStreaming />} />

          {/* Case Studies Routes */}
          <Route path="/case-studies/ecommerce" element={<Ecommerce />} />
          <Route path="/case-studies/healthcare" element={<Healthcare />} />
          <Route path="/case-studies/fintech" element={<Fintech />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<ContactUs />} />
           <Route path="/casestudies" element={<CaseStudies />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
