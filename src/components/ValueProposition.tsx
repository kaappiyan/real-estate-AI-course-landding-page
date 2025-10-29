import { Card } from "./ui/card";
import { Zap, Clock, Award, TrendingUp, Shield, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Immediate Implementation",
    description: "Every lesson includes actionable steps you can apply to your business today"
  },
  {
    icon: Clock,
    title: "Self-Paced Learning",
    description: "Learn at your own speed with lifetime access to all course materials"
  },
  {
    icon: Award,
    title: "Industry-Proven Methods",
    description: "Strategies tested and refined by top-performing realtors nationwide"
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Track your progress with clear metrics and performance indicators"
  },
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    description: "30-day full refund if you're not completely satisfied with the course"
  },
  {
    icon: Rocket,
    title: "Accelerated Growth",
    description: "Compress years of trial and error into weeks of focused learning"
  }
];

export function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Why This Course Works</h2>
          <p className="text-blue-200 text-xl max-w-3xl mx-auto">
            Designed with your success in mind, every aspect of this course delivers real-world value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-200">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
