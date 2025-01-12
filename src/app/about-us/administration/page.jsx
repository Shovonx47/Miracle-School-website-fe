import Image from 'next/image';

export default function Administration() {
  const administrators = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      image: "/images/principal.jpg", // You'll need to add these images
      email: "principal@school.edu",
      description: "Dr. Johnson has over 20 years of experience in education leadership...",
    },
    // Add more administrators as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-4">Administration</h1>
          <p className="text-blue-100 text-lg">
            Meet the dedicated team of professionals who lead our institution towards excellence in education.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-12">
        {/* Overview Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            Our administrative team works collaboratively to ensure the highest standards of education,
            student support, and institutional development. Each member brings unique expertise and
            dedication to their role in making our school a center of academic excellence.
          </p>
        </section>

        {/* Administrative Team Section */}
        <section className="space-y-12">
          <h2 className="text-2xl font-semibold text-gray-800">Our Administrative Team</h2>
          
          {administrators.map((admin) => (
            <div 
              key={admin.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <div className="h-64 w-full relative">
                    <Image
                      src={admin.image}
                      alt={admin.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="uppercase tracking-wide text-blue-600 font-semibold">
                    {admin.position}
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold text-gray-800">
                    {admin.name}
                  </h3>
                  <div className="mt-2 text-gray-600">
                    <a 
                      href={`mailto:${admin.email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {admin.email}
                    </a>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {admin.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Administration
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">
                Administrative Office
              </h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 4:00 PM<br />
                Phone: (555) 123-4567<br />
                Email: admin@school.edu
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">
                Schedule an Appointment
              </h3>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Request Meeting
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 