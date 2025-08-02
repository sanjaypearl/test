export default function CallToAction() {
  return (
    <section className="bg-blue-100 py-12 px-4 text-center relative overflow-hidden">
      {/* Background pattern (optional) */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
          Ready to Strengthen's Your Security?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Join our community of ethical hackers and security-conscious companies
          today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-6 rounded-full transition">
            Sign Up as Researcher
          </button>
          <button className="border bg-gray-50 border-blue-600 text-blue-600 hover:bg-blue-100 text-sm font-medium py-2.5 px-6 rounded-full transition">
            Get Started as Company
          </button>
        </div>
      </div>
    </section>
  );
}
