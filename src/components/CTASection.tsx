import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface CTASectionProps {
  variant?: "primary" | "secondary";
}

export function CTASection({ variant = "primary" }: CTASectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  if (variant === "secondary") {
    return (
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Join hundreds of realtors who have already elevated their game
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 group"
              >
                Enroll Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            {submitted && (
              <div className="mt-4 text-white flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you! We'll be in touch soon.</span>
              </div>
            )}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-white mb-4">
              Start Your Journey to Real Estate Mastery
            </h2>
            <p className="text-blue-100 text-xl">
              Limited-time offer: Get instant access to all 5 lessons plus exclusive bonus materials
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 group"
              >
                Subscribe Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            {submitted && (
              <div className="mt-4 text-white flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Success! Check your email for course details.</span>
              </div>
            )}
          </form>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Instant Start</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
