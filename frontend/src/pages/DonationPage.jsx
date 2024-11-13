import React from 'react';

const Donation = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Alumni Donation Portal</h1>
          <p className="text-lg mt-2">Empower future generations through your contributions.</p>
        </div>
      </header>

      {/* Donation Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900">Make a Donation</h2>
          <p className="text-gray-700 mt-2">Your donation will help fund impactful projects for our students and college community.</p>

          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="donationAmount" className="text-gray-800 font-medium">Donation Amount (INR)</label>
              <input type="number" id="donationAmount" className="w-full mt-2 p-2 border rounded-md" placeholder="Enter amount" />
            </div>
            <div>
              <label htmlFor="alumniName" className="text-gray-800 font-medium">Your Name</label>
              <input type="text" id="alumniName" className="w-full mt-2 p-2 border rounded-md" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="collegeID" className="text-gray-800 font-medium">College ID</label>
              <input type="text" id="collegeID" className="w-full mt-2 p-2 border rounded-md" placeholder="Enter your roll number" />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-800 font-medium">Message</label>
              <textarea id="message" className="w-full mt-2 p-2 border rounded-md" rows="4" placeholder="Leave a message (optional)" />
            </div>
            <button className="w-full bg-blue-900 text-white py-2 rounded-md font-bold hover:bg-blue-800 transition">Donate Now</button>
          </form>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Ongoing College Projects</h2>
          <p className="text-gray-600 mt-2">See how your donation can make a difference in supporting these exciting projects.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800">Library Renovation</h3>
            <p className="text-gray-700 mt-2">Renovating the library to provide a more conducive environment for learning and collaboration.</p>
            <p className="mt-4 text-sm text-gray-500">Goal: ₹5,00,000</p>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800">New Computer Lab</h3>
            <p className="text-gray-700 mt-2">Equipping a new lab with the latest technology to support students in tech-related courses.</p>
            <p className="mt-4 text-sm text-gray-500">Goal: ₹7,50,000</p>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800">Scholarship Fund</h3>
            <p className="text-gray-700 mt-2">Establishing a scholarship fund for underprivileged students with excellent academic records.</p>
            <p className="mt-4 text-sm text-gray-500">Goal: ₹3,00,000</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900">The Impact of Your Donation</h2>
          <p className="text-gray-700 mt-4">With your generous support, we can enhance our college’s facilities, provide scholarships, and bring new opportunities to our students.</p>

          {/* Impact Highlights */}
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-blue-900">500+</h3>
              <p className="text-gray-600">Students benefited from scholarships</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-blue-900">10</h3>
              <p className="text-gray-600">New Labs Set Up</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-blue-900">15+</h3>
              <p className="text-gray-600">Campus Facilities Improved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Thank you for your continuous support to our college and students!</p>
          <p className="text-sm mt-2">© 2024 Alumni Association Portal</p>
        </div>
      </footer>
    </div>
  );
};

export default Donation;
