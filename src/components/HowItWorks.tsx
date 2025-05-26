
import { MapPin, Car, Navigation, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Set Your Destination",
      description: "Enter where you want to go and we'll find the perfect ride for you."
    },
    {
      icon: Car,
      title: "Choose Your Ride",
      description: "Select from our range of vehicles - from economy to premium options."
    },
    {
      icon: Navigation,
      title: "Track Your Driver",
      description: "See your driver's location in real-time and get updates on arrival time."
    },
    {
      icon: CheckCircle,
      title: "Enjoy Your Journey",
      description: "Sit back, relax, and enjoy a safe, comfortable ride to your destination."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sawariyaan-blue mb-4">
            How SAWARIYAAN Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting a ride with SAWARIYAAN is simple, fast, and reliable. Here's how it works in just 4 easy steps.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-sawariyaan-green/30 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="bg-sawariyaan-green rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg">
                    <step.icon className="h-12 w-12 text-white mx-auto" />
                  </div>
                  <div className="bg-sawariyaan-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-sawariyaan-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sawariyaan-blue to-sawariyaan-green rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience SAWARIYAAN?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Download our app today and get your first ride with a special discount!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sawariyaan-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download for iOS
              </button>
              <button className="bg-white text-sawariyaan-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
