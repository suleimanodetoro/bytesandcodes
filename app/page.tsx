// app/page.tsx
import AnimatedCounter from "@/components/AnimatedCounter";
import CarouselPosts from "@/components/CarouselPost";
import Image from "next/image";
import { Metadata } from 'next';
import siteConfig from '@/lib/metadata';


export const metadata: Metadata = {
  title: siteConfig.title, // Uses default title
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    images: siteConfig.openGraph.images,
    locale: siteConfig.locale,
    type: 'website',
  },
};

const HomePage = () => {
  const impactStats = [
    { number: 100, label: "Volunteers", suffix: "+" },
    { number: 5000000, label: "Funds Deployed", suffix: "+", prefix: "₦" },
    { number: 10, label: "Events Hosted", suffix: "+" }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen-90 flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/coding_image.jpg"
            alt="Coding background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Building Tomorrow's Tech Leaders
          </h1>
          <p className="text-xl md:text-2xl text-primary-100">
            Empowering communities through technology and education.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="min-h-screen-80 bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Education",
                content: "Empowering through knowledge and skill development",
                icon: "🎓",
              },
              {
                title: "Community",
                content: "Building stronger connections and support networks",
                icon: "🤝",
              },
              {
                title: "Sustainability",
                content: "Creating lasting impact for future generations",
                icon: "🌱",
              },
              {
                title: "Innovation",
                content: "Driving positive change through technology",
                icon: "💡",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white border border-secondary-200 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">
                  {card.title}
                </h3>
                <p className="text-secondary-600">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - Updated with animated counter */}
      <section className="min-h-screen-80 bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-secondary-900">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-lg shadow-sm"
              >
                <h3 className="text-4xl font-bold mb-3 text-primary-600">
                  <AnimatedCounter 
                    end={stat.number}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </h3>
                <p className="text-xl text-secondary-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="min-h-screen-80 bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-secondary-900">
            Latest News
          </h2>
          <div className="w-11/12 md:w-4/5 mx-auto">
            <CarouselPosts />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
