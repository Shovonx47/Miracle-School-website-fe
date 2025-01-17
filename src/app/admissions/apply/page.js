// src/pages/application-form.js
import React from "react";

const ApplicationForm = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto p-6 bg-secondary shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">
          বিদ্যালয়ে ভর্তি ফর্ম
        </h1>
        <form className="space-y-6">
          {/* শিক্ষার্থীর নাম */}
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-primary">
              শিক্ষার্থীর নাম
            </label>
            <input
              type="text"
              id="studentName"
              className="w-full mt-1 p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="শিক্ষার্থীর পূর্ণ নাম লিখুন"
            />
          </div>

          {/* শিক্ষার্থীর বয়স */}
          <div>
            <label htmlFor="studentAge" className="block text-sm font-medium text-primary">
              শিক্ষার্থীর বয়স
            </label>
            <input
              type="number"
              id="studentAge"
              className="w-full mt-1 p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="শিক্ষার্থীর বয়স লিখুন"
            />
          </div>

          {/* পিতার নাম */}
          <div>
            <label htmlFor="fatherName" className="block text-sm font-medium text-primary">
              পিতার নাম
            </label>
            <input
              type="text"
              id="fatherName"
              className="w-full mt-1 p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="পিতার নাম লিখুন"
            />
          </div>

          {/* মাতার নাম */}
          <div>
            <label htmlFor="motherName" className="block text-sm font-medium text-primary">
              মাতার নাম
            </label>
            <input
              type="text"
              id="motherName"
              className="w-full mt-1 p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="মাতার নাম লিখুন"
            />
          </div>

          {/* অভিভাবকের মোবাইল নম্বর */}
          <div>
            <label htmlFor="guardianMobile" className="block text-sm font-medium text-primary">
              অভিভাবকের মোবাইল নম্বর
            </label>
            <input
              type="text"
              id="guardianMobile"
              className="w-full mt-1 p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="অভিভাবকের মোবাইল নম্বর লিখুন"
            />
          </div>

          {/* ঠিকানা */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-primary">
              ঠিকানা
            </label>
            <textarea
              id="address"
              className="w-full mt-1 p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="অভিভাবকের স্থায়ী ঠিকানা লিখুন"
              rows="4"
            ></textarea>
          </div>

          {/* শ্রেণি */}
          <div>
            <label htmlFor="class" className="block text-sm font-medium text-primary">
              শ্রেণি
            </label>
            <select
              id="class"
              className="w-full mt-1 p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="" disabled selected>
                শ্রেণি নির্বাচন করুন
              </option>
              <option value="playgroup">প্লে গ্রুপ</option>
              <option value="nursery">নার্সারি</option>
              <option value="kg">কেজি</option>
              <option value="class1">১ম শ্রেণি</option>
              <option value="class2">২য় শ্রেণি</option>
              <option value="class3">৩য় শ্রেণি</option>
            </select>
          </div>

          {/* শিক্ষাবর্ষ */}
          <div>
            <label htmlFor="academicYear" className="block text-sm font-medium text-primary">
              শিক্ষাবর্ষ
            </label>
            <input
              type="text"
              id="academicYear"
              className="w-full mt-1 p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="শিক্ষাবর্ষ লিখুন (যেমন: ২০২৪-২০২৫)"
            />
          </div>

          {/* শিক্ষার্থীর ছবি আপলোড */}
          <div>
            <label htmlFor="studentPhoto" className="block text-sm font-medium text-primary">
              শিক্ষার্থীর ছবি
            </label>
            <input
              type="file"
              id="studentPhoto"
              className="w-full mt-1 p-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* জমা দিন */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
            >
              জমা দিন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
