'use client';
import Image from 'next/image';
import { FaLightbulb, FaCrosshairs, FaGraduationCap, FaHandHoldingHeart, FaBalanceScale, FaGlobe } from 'react-icons/fa';

const iconMap = {
  FaLightbulb,
  FaCrosshairs,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaBalanceScale,
  FaGlobe,
};

// Dummy data
const dummyData = {
  hero: {
    image: "/assets/images/mv/national-cancer-institute-N_aihp118p8-unsplash.jpg",
    title: "Mission, Vision & Values",
    subtitle: "Building tomorrow's leaders through excellence in education, research, and character development."
  },
  mission: {
    description: "Notre Dame College is committed to providing exceptional education that empowers students to become leaders in their chosen fields while maintaining high ethical standards and contributing positively to society.",
    points: [
      "Deliver excellence in education through innovative teaching methods and comprehensive curricula",
      "Foster critical thinking and creative problem-solving skills",
      "Promote research and scholarly activities that advance knowledge",
      "Develop well-rounded individuals prepared for global challenges",
      "Maintain strong community partnerships for experiential learning"
    ],
    image: "/assets/images/mv/yan-berthemy-TRrBszDmuWE-unsplash.jpg"
  },
  vision: {
    description: "We envision Notre Dame College as a leading institution of higher education, recognized globally for academic excellence, innovative research, and the development of ethical leaders who make meaningful contributions to society.",
    quote: "Shaping minds, building character, and inspiring innovation for a better tomorrow.",
    image: "/assets/images/mv/national-cancer-institute-N_aihp118p8-unsplash.jpg"
  },
  coreValues: [
    {
      icon: "FaGraduationCap",
      color: "text-blue-600",
      title: "Academic Excellence",
      description: "Striving for the highest standards of academic achievement and intellectual growth."
    },
    {
      icon: "FaHandHoldingHeart",
      color: "text-red-600",
      title: "Social Responsibility",
      description: "Fostering a commitment to service and positive contribution to society."
    },
    {
      icon: "FaBalanceScale",
      color: "text-green-600",
      title: "Ethical Leadership",
      description: "Developing leaders with strong moral values and integrity."
    },
    {
      icon: "FaGlobe",
      color: "text-purple-600",
      title: "Global Perspective",
      description: "Cultivating awareness and understanding of global issues and cultures."
    }
  ]
};

export default function MissionVisionPage() {
  const data = dummyData;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src={data.hero.image}
          alt="Notre Dame College Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h1 className="text-5xl font-bold text-white mb-4">{data.hero.title}</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              {data.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <FaCrosshairs className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {data.mission.description}
              </p>
              <ul className="space-y-4">
                {data.mission.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600">•</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[300px]">
              <Image
                src={data.mission.image}
                alt="Students in library"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-full min-h-[300px] md:order-2">
              <Image
                src={data.vision.image}
                alt="Campus Life"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <FaLightbulb className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {data.vision.description}
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-blue-800 italic">
                  {data.vision.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.coreValues.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className={`${value.color} text-4xl mb-4`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}