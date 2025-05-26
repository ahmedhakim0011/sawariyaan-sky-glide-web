
import { Car, MapPin, Navigation, Clock, Shield, CreditCard } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Travel in comfort with our well-maintained, modern vehicles equipped with all amenities."
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your ride in real-time and share your journey with loved ones for added safety."
    },
    {
      icon: Navigation,
      title: "Smart Routing",
      description: "Our AI-powered system finds the fastest routes to get you to your destination quickly."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Need a ride? We're here around the clock, ready to serve you anytime, anywhere."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All drivers are verified and background-checked. Your safety is our top priority."
    },
    {
      icon: CreditCard,
      title: "Cashless Payments",
      description: "Multiple payment options including cards, digital wallets, and in-app payments."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sawariyaan-blue mb-4">
            Why Choose SAWARIYAAN?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the best ride-hailing experience through innovation, safety, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-sawariyaan-green/10 rounded-lg p-4 w-fit mb-6 group-hover:bg-sawariyaan-green group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-sawariyaan-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-sawariyaan-blue mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
