import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/Home";
import { Pricing } from "@/pages/Pricing";
import { HCSPage } from "@/pages/HCS";
import { HKEPage } from "@/pages/HKE";
import { CareersPage } from "@/pages/Careers";
import { AboutPage } from "@/pages/About";
import { BlogPage } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { ContactPage } from "@/pages/Contact";
import ScrollToTop from "./lib/helpers/scrollToTop";
import { HMDPage } from "./pages/HMD";
import { ChangelogPage } from "./pages/ChangeLog";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/5 to-background dark:from-background dark:via-blue-950/5 dark:to-background" />

          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-20" />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />

          {/* Top-right gradient blob */}
          <div className="absolute -top-[30%] -right-[25%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-transparent blur-3xl" />

          {/* Bottom-left gradient blob */}
          <div className="absolute -bottom-[30%] -left-[25%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-transparent blur-3xl" />
        </div>

        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products/container-service" element={<HCSPage />} />
          <Route path="/products/kubernetes-engine" element={<HKEPage />} />
          <Route path="/products/managed-databases" element={<HMDPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/logs" element={<ChangelogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
