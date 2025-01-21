import React from 'react';

const RulesAndRegulations = () => {
  // Sample rules and regulations data in Bangla
  const rulesData = {
    title: "নিয়ম ও প্রবিধান",
    introduction: `আমাদের শিক্ষা প্রতিষ্ঠানে শিক্ষার্থীদের সুষ্ঠু শিক্ষা নিশ্চিত করার জন্য কিছু মৌলিক নিয়ম ও প্রবিধান রয়েছে। এই নিয়মগুলি সকল শিক্ষার্থী, অভিভাবক এবং শিক্ষকদের জন্য প্রযোজ্য।`,
    sections: [
      {
        title: "উপস্থিতি ও সময়ানুবর্তিতা",
        content: `১. প্রতিটি শিক্ষার্থীকে নির্ধারিত সময়ের কমপক্ষে ১৫ মিনিট আগে বিদ্যালয়ে উপস্থিত হতে হবে।

২. যেকোনো কারণে অনুপস্থিত থাকলে পূর্বে অবশ্যই বিদ্যালয়কে অবহিত করতে হবে।

৩. টানা তিন দিনের বেশি অনুপস্থিতির ক্ষেত্রে অভিভাবকের সাথে যোগাযোগ করা হবে।

৪. মাসিক উপস্থিতি ৮৫% এর কম হলে পরীক্ষায় অংশগ্রহণের অনুমতি নাও দেওয়া হতে পারে।`
      },
      {
        title: "পোশাক ও বেশভূষা",
        content: `১. সকল শিক্ষার্থীকে নির্ধারিত স্কুল ইউনিফর্ম পরিধান করে আসতে হবে।

২. ইউনিফর্মের সাথে সাদা/কালো জুতা ও সাদা মোজা ব্যবহার করতে হবে।

৩. মেয়েদের ক্ষেত্রে চুল বাঁধা থাকতে হবে এবং সাধারণ কালো রিবন ব্যবহার করা যাবে।

৪. অতিরিক্ত আভরণ বা গহনা পরিধান করে আসা নিষিদ্ধ।`
      },
      {
        title: "আচরণ বিধি",
        content: `১. সহপাঠী ও শিক্ষকদের সাথে সব সময় সৌজন্যমূলক আচরণ করতে হবে।

২. স্কুল চত্বরে কোন প্রকার অশালীন আচরণ বরদাস্ত করা হবে না।

৩. স্কুলের সম্পত্তির কোন প্রকার ক্ষতি করা হলে তার ক্ষতিপূরণ সংশ্লিষ্ট ছাত্র/ছাত্রীর অভিভাবককে বহন করতে হবে।

৪. মোবাইল ফোন বা অন্য কোন ইলেকট্রনিক ডিভাইস স্কুলে আনা সম্পূর্ণ নিষিদ্ধ।`
      },
      {
        title: "পরীক্ষা ও মূল্যায়ন",
        content: `১. প্রতি সেমিস্টারে দুটি করে টার্ম পরীক্ষা এবং মাসিক মূল্যায়ন পরীক্ষা অনুষ্ঠিত হবে।

২. পরীক্ষায় অসদুপায় অবলম্বন করলে কঠোর শাস্তিমূলক ব্যবস্থা গ্রহণ করা হবে।

৩. প্রতিটি বিষয়ে কমপক্ষে ৪০% নম্বর পেতে হবে পাশ করার জন্য।

৪. অভিভাবক সভায় অভিভাবকদের উপস্থিতি বাধ্যতামূলক।`
      },
      {
        title: "ছুটি ও অবকাশ",
        content: `১. সরকারি ছুটির দিনগুলিতে বিদ্যালয় বন্ধ থাকবে।

২. বিশেষ পরিস্থিতিতে ছুটির জন্য অবশ্যই আগে থেকে লিখিত আবেদন করতে হবে।

৩. অসুস্থতাজনিত ছুটির ক্ষেত্রে ডাক্তারি সনদ জমা দিতে হবে।

৪. দীর্ঘ মেয়াদি ছুটির ক্ষেত্রে অধ্যক্ষের অনুমতি প্রয়োজন।`
      }
    ],
    footer: "উপরোক্ত নিয়মাবলী যেকোনো সময় পরিবর্তন, পরিবর্ধন বা সংশোধন করার অধিকার কর্তৃপক্ষ সংরক্ষণ করে।"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">{rulesData.title}</h1>
          <p className="text-lg opacity-90">{rulesData.introduction}</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {rulesData.sections.map((section, index) => (
            <section key={index} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              </div>
            </section>
          ))}

          {/* Footer Note */}
          <div className="mt-12 pt-6 border-t-2 border-gray-100">
            <p className="text-sm text-gray-600 italic">
              {rulesData.footer}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RulesAndRegulations;