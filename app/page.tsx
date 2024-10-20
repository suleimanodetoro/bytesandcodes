const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Non-Profit</h1>
        <p className="text-xl">Making a difference in the community.</p>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-center">
          We aim to empower individuals through education and community outreach.
        </p>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Impact</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-2xl font-bold">100+</h3>
            <p>Volunteers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">500+</h3>
            <p>People Helped</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">50+</h3>
            <p>Events Hosted</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="max-w-7xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2>
        {/* Placeholder for news items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* News Item */}
          <div className="border p-4">
            <h3 className="font-bold text-xl">Event Title</h3>
            <p className="mt-2">Brief description of the event.</p>
          </div>
          {/* Repeat for other news items */}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
