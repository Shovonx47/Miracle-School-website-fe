import React from 'react';

const ParentGuidelines = () => {
  const guidelines = [
    "নিয়মিত বাচ্চাদের বিদ্যালয়ে পাঠানো নিশ্চিত করুন",
    "স্কুলের সময়সূচি অনুযায়ী সময়মত বাচ্চাদের স্কুলে পৌঁছে দিন",
    "প্রতি সপ্তাহে বাচ্চাদের খাতা-বই পরীক্ষা করুন",
    "পিটিএম (অভিভাবক-শিক্ষক বৈঠক) নিয়মিত উপস্থিত থাকুন",
    "বাড়ির কাজ সম্পন্ন করতে বাচ্চাদের সহায়তা করুন",
    "স্কুলের নোটিশ ও চিঠিপত্র নিয়মিত পর্যালোচনা করুন",
    "বাচ্চাদের স্বাস্থ্য ও পুষ্টির দিকে নজর রাখুন",
    "স্কুলের ফি সময়মত পরিশোধ করুন",
    "বাচ্চাদের পড়াশোনার জন্য বাড়িতে উপযুক্ত পরিবেশ তৈরি করুন",
    "শিক্ষকদের সাথে নিয়মিত যোগাযোগ রাখুন"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          অভিভাবকদের জন্য নির্দেশিকা
        </h1>

        <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-lg shadow-md">
          <ul className="space-y-4">
            {guidelines.map((guideline, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-foreground leading-relaxed">{guideline}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-primary/70 italic">
            * অভিভাবকদের সহযোগিতা শিক্ষার্থীদের সাফল্যের জন্য অপরিহার্য *
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentGuidelines;