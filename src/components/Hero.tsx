import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1758194190679-198a77cba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxNzQ5MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
          <span className="text-blue-400">Transform Your Real Estate Business</span>
        </div>
        
        <h1 className="text-white mb-6 max-w-4xl mx-auto">
          Master the Art of Real Estate Growth: From Fundamentals to AI-Powered Marketing
        </h1>
        
        <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-10">
          A comprehensive 5-lesson course designed exclusively for realtors who want to scale their business, dominate their market, and leverage cutting-edge AI technology to attract more clients.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={onCTAClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 group"
          >
            Enroll in Course Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-6"
          >
            View Course Overview
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl text-blue-400 mb-2">5</div>
            <div className="text-slate-300">Comprehensive Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-400 mb-2">100%</div>
            <div className="text-slate-300">Practical Strategies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-400 mb-2">AI</div>
            <div className="text-slate-300">Powered Marketing</div>
          </div>
        </div>
      </div>
    </section>
  );
}
