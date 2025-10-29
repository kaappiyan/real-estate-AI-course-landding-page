import { Card } from "./ui/card";
import { BookOpen, TrendingUp, Users, Sparkles, Target } from "lucide-react";

const lessons = [
  {
    number: "01",
    title: "Real Estate Fundamentals",
    description: "Build a rock-solid foundation with proven principles of successful real estate business, market analysis, and client psychology.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Brand Building & Positioning",
    description: "Establish yourself as the go-to realtor in your market. Learn personal branding strategies that attract high-value clients.",
    icon: Target,
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Digital Marketing Mastery",
    description: "Master social media, content marketing, and online advertising to generate consistent leads and build a powerful online presence.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500"
  },
  {
    number: "04",
    title: "AI-Powered Marketing Tools",
    description: "Leverage artificial intelligence to automate marketing, personalize client experiences, and scale your outreach exponentially.",
    icon: Sparkles,
    color: "from-green-500 to-emerald-500"
  },
  {
    number: "05",
    title: "Client Acquisition & Retention",
    description: "Implement proven systems for converting leads into clients and turning one-time buyers into lifetime referral partners.",
    icon: Users,
    color: "from-indigo-500 to-blue-500"
  }
];

export function CourseHighlights() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600">Course Curriculum</span>
          </div>
          <h2 className="mb-4">5 Transformative Lessons</h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            A carefully structured journey from foundational principles to cutting-edge AI marketing strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => {
            const Icon = lesson.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${lesson.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl bg-gradient-to-br ${lesson.color} bg-clip-text text-transparent opacity-30`}>
                    {lesson.number}
                  </div>
                </div>
                <h3 className="mb-3">{lesson.title}</h3>
                <p className="text-slate-600">
                  {lesson.description}
                </p>
              </Card>
            );
          })}
          
          <Card className="p-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-0 flex flex-col justify-center items-center text-center">
            <Sparkles className="w-12 h-12 mb-4" />
            <h3 className="text-white mb-3">Bonus Materials</h3>
            <p className="text-blue-100">
              Exclusive templates, scripts, and AI prompts to accelerate your implementation
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
