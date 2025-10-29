import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Luxury Realtor, San Francisco",
    content: "This course completely transformed how I approach digital marketing. The AI tools alone have saved me 15 hours a week while tripling my lead generation.",
    rating: 5,
    result: "3x more leads"
  },
  {
    name: "Jennifer Rodriguez",
    role: "Residential Specialist, Miami",
    content: "Sarah's teaching style is clear, practical, and immediately actionable. I closed 2 additional deals within a month of implementing her strategies.",
    rating: 5,
    result: "2 new deals in 30 days"
  },
  {
    name: "David Thompson",
    role: "Commercial Broker, Chicago",
    content: "The personal branding module was a game-changer. I went from being just another agent to the recognized expert in my niche market.",
    rating: 5,
    result: "Became market leader"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600">Success Stories</span>
          </div>
          <h2 className="mb-4">What Realtors Are Saying</h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Real results from real estate professionals who took action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <div className="mb-2">{testimonial.name}</div>
                <div className="text-sm text-slate-500 mb-3">{testimonial.role}</div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {testimonial.result}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
