import React from 'react';

const DressCode = () => {
  const dressCodeRules = {
    primarySchool: {
      girls: [
        "হালকা নীল রঙের ড্রেস বা ক্ষেত্রমতো সালোয়ার কামিজ",
        "সাদা কলার সহ পোশাক",
        "সাদা মোজা",
        "সাদা ক্যানভাস জুতা",
        "চুল সংযত ও পরিষ্কার রাখতে হবে"
      ],
      boys: [
        "হালকা নীল রঙের শার্ট",
        "কালো বা নীল শর্ট",
        "সাদা মোজা",
        "সাদা বা কালো জুতা",
        "চুল ছোট ও পরিষ্কার রাখতে হবে"
      ]
    },
    highSchool: {
      girls: [
        "গাঢ় নীল সালোয়ার কামিজ",
        "সাদা দুপাটা বাধ্যতামূলক",
        "কামিজ হাঁটু পর্যন্ত বা নিচে হতে হবে",
        "সাদা মোজা",
        "কালো বা নীল জুতা"
      ],
      boys: [
        "সাদা ফুল হাতা শার্ট",
        "নীল প্যান্ট বা ট্রাউজার",
        "কালো বেল্ট",
        "সাদা মোজা",
        "কালো জুতা"
      ]
    }
  };

  const renderDressCodeSection = (title, rules) => (
    <div className="bg-secondary p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-medium text-primary/80 mb-3">ছাত্রীদের জন্য</h3>
          <ul className="list-disc list-inside space-y-2">
            {rules.girls.map((rule, index) => (
              <li key={index} className="text-foreground">{rule}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium text-primary/80 mb-3">ছাত্রদের জন্য</h3>
          <ul className="list-disc list-inside space-y-2">
            {rules.boys.map((rule, index) => (
              <li key={index} className="text-foreground">{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          বিদ্যালয়ের পোশাক বিধি
        </h1>

        {renderDressCodeSection(
          "প্রাথমিক বিদ্যালয়", 
          dressCodeRules.primarySchool
        )}

        {renderDressCodeSection(
          "মাধ্যমিক বিদ্যালয়", 
          dressCodeRules.highSchool
        )}

        <div className="text-center mt-8">
          <p className="text-primary/70 italic">
            * পোশাক বিধি কঠোরভাবে মেনে চলা বাধ্যতামূলক *
          </p>
        </div>
      </div>
    </div>
  );
};

export default DressCode;