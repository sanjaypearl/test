import React from "react";

const FindUs = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
        <div className="rounded-md overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="CyberNeoGen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0578405634186!2d77.59456291482222!3d12.97159869085492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d1b7a7f3%3A0x7499c1ad761260cf!2sMG%20Road%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1629805782646!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
