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
import Web from "./pages/services/Web";
import Mobile from "./pages/services/Mobile";
import Strategy from "./pages/services/Strategy";
import Cloud from "./pages/services/Cloud";

// Case Studies Pages
import Ecommerce from "./pages/case-studies/Ecommerce";
import Healthcare from "./pages/case-studies/Healthcare";
import Fintech from "./pages/case-studies/Fintech";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about/story" element={<Story />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/mission" element={<Mission />} />
          
          {/* Services Routes */}
          <Route path="/services/web" element={<Web />} />
          <Route path="/services/mobile" element={<Mobile />} />
          <Route path="/services/strategy" element={<Strategy />} />
          <Route path="/services/cloud" element={<Cloud />} />
          
          {/* Case Studies Routes */}
          <Route path="/case-studies/ecommerce" element={<Ecommerce />} />
          <Route path="/case-studies/healthcare" element={<Healthcare />} />
          <Route path="/case-studies/fintech" element={<Fintech />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
