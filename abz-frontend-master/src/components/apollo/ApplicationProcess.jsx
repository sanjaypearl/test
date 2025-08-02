import Image from "next/image";

export default function ApplicationProcess() {
  const steps = [
    {
      title: "APPLICATION",
      description:
        "Fill out the application form and help us understand more about your skillset.",
    },
    {
      title: "ASSESSMENT",
      description:
        "We will begin reviewing your application based on your experience, skills, and expertise, as well as your certifications and hall of fames.",
    },
    {
      title: "INTERVIEW",
      description:
        "Once we move ahead with your application, our team will set up a time to meet face-to-face and align on community expectations.",
    },
    {
      title: "INVITE",
      description:
        "After successful vetting of applications we will send you invite to join our apollo community.",
    },
    {
      title: "CONTINUOUS EVALUATION",
      description:
        "Members of the Apollo Community are reviewed on a continuous basis based on the feedbacks received from peers and customers.",
    },
  ];

  return (
    <div className="bg-[#ffffff] py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side: Image and Description */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <Image
            src="/hacker1.png"
            alt="Application Process"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h2 className="text-lg font-semibold mt-4">Application Process</h2>
          <p className="text-gray-700 text-sm mt-2">
            We are looking for elite hackers who are passionate about security
            and have a proven track record of finding vulnerabilities. If you
            are one of them, we would love to have you in our community.
          </p>
          <button className="mt-4 bg-black text-white py-2 px-5 rounded-md hover:opacity-90 transition">
            Apply Now
          </button>
        </div>

        {/* Right Side: Steps */}
        <div className="lg:w-2/3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative pl-12 mb-10 border-l border-gray-300"
            >
              <div className="absolute -left-6 top-0 w-10 h-10 rounded-full border-2 border-teal-600 flex items-center justify-center text-teal-600 font-semibold">
                {index + 1}
              </div>
              <h3 className="font-bold text-md text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
