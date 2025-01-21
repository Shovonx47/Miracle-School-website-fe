export default function QuickLinks() {
  const links = [
    { title: "Online Admission", url: "/admissions/admission-process" },
    { title: "Academic Calendar", url: "/academics/academic-calendar" },
    { title: "Photo Gallery", url: "/photo-gallery" },
    { title: "Contact Us", url: "/contact-us/contact-information" }
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
      <div className="space-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition duration-150 text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
} 