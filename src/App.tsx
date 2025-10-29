import { Hero } from "./components/Hero";
import { CourseHighlights } from "./components/CourseHighlights";
import { MentorSection } from "./components/MentorSection";
import { ValueProposition } from "./components/ValueProposition";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";

export default function App() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-section");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero onCTAClick={scrollToCTA} />
      <CourseHighlights />
      <MentorSection />
      <ValueProposition />
      <Testimonials />
      <div id="cta-section">
        <CTASection variant="primary" />
      </div>
      <CTASection variant="secondary" />
      
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">© 2025 Real Estate Mastery Course. All rights reserved.</p>
            <p className="text-sm">
              Transform your real estate business with AI-powered strategies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
