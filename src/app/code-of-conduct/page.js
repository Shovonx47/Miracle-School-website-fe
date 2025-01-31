import React from 'react';

const CodeOfConduct = () => {
  const conductRules = [
    {
      title: "আচরণ নিয়ম",
      description: "শিক্ষার্থীদের সর্বদা সম্মানজনক এবং নম্র আচরণ করতে হবে। অন্য শিক্ষার্থী, শিক্ষক এবং কর্মচারীদের প্রতি সম্মান প্রদর্শন করা আবশ্যক।"
    },
    {
      title: "পোশাক আইন",
      description: "নির্ধারিত স্কুল ইউনিফর্ম পরিধান করা বাধ্যতামূলক। পরিচ্ছন্ন এবং সুসংগঠিত দেখতে হবে।"
    },
    {
      title: "শৃঙ্খলা",
      description: "কোনো প্রকার হয়রানি, সহিংসতা বা অসংলগ্ন আচরণ সম্পূর্ণ নিষিদ্ধ। শ্রৃঙ্খলা ও শাবিতা বজায় রাখতে হবে।"
    },
    {
      title: "শিক্ষাগত অখণ্ডতা",
      description: "নকল, প্রতারণা বা বৌদ্ধিক সম্পত্তি চুরি সম্পূর্ণ নিষিদ্ধ। সৎ এবং গ্রহণযোগ্য পদ্ধতিতে কাজ করতে হবে।"
    },
    {
      title: "সম্পদ সংরক্ষণ",
      description: "স্কুলের সকল সম্পদ যত্ন করে রাখতে হবে। যেকোনো ক্ষতি বা অপব্যবহারের জন্য ব্যক্তিগত দায়বদ্ধতা থাকবে।"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          বিদ্যালয়ের আচরণ বিধি
        </h1>

        <div className="max-w-3xl mx-auto space-y-6">
          {conductRules.map((rule, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {rule.title}
              </h2>
              <p className="text-foreground leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary/70 italic">
            * এই আচরণ বিধি মেনে চলা সকল শিক্ষার্থীর জন্য বাধ্যতামূলক *
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;