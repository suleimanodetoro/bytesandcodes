import NewsCarousel from "@/components/NewsCarousel";


const HomePage = () => {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Non-Profit</h1>
        <p className="text-lg md:text-xl">Making a difference in the community.</p>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Education", content: "Empowering through knowledge" },
            { title: "Community", content: "Building stronger together" },
            { title: "Sustainability", content: "Creating a greener future" },
            { title: "Innovation", content: "Driving positive change" }
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p>Volunteers</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p>People Helped</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p>Events Hosted</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest News</h2>
        <div className="w-4/5 mx-auto">
          <NewsCarousel />
        </div>
      </section>
    </main>
  );
};

export default HomePage;