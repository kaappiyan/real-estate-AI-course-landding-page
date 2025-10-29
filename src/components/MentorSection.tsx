import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";

const achievements = [
  "15+ years in real estate industry",
  "Closed over $500M in transactions",
  "Trained 1,000+ successful realtors",
  "Featured in Forbes & Entrepreneur",
  "AI Marketing certification holder",
  "Top 1% realtor nationwide"
];

export function MentorSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-20 blur-xl"></div>
            <img 
              src="\images\sathish.jpg"
              alt="Course Mentor"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-2 border-blue-100">
              <div className="text-3xl text-blue-600 mb-1">4.9/5.0</div>
              <div className="text-slate-600">Student Rating</div>
            </div>
          </div>

          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-600">Your Mentor</span>
            </div>
            
            <h2 className="mb-4">Learn from an Industry Leader</h2>
            
            <p className="text-slate-600 text-lg mb-6">
              Hi, I'm Sarah Mitchell, and I've dedicated my career to mastering the art and science of real estate success. After building a multi-million dollar business from scratch, I discovered that the key to sustainable growth lies in combining timeless fundamentals with modern technology.
            </p>
            
            <p className="text-slate-600 text-lg mb-8">
              This course distills everything I've learned into actionable strategies that you can implement immediately. I'm passionate about helping realtors like you break through plateaus and achieve extraordinary results.
            </p>

            <div className="mb-8">
              <h3 className="mb-4">Achievements & Credentials</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">Real Estate Expert</Badge>
              <Badge variant="secondary" className="px-3 py-1">AI Specialist</Badge>
              <Badge variant="secondary" className="px-3 py-1">Marketing Pro</Badge>
              <Badge variant="secondary" className="px-3 py-1">Business Coach</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
