
import { Button } from "@/components/ui/button";
import { Car, MapPin, Navigation } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-sawariyaan-blue to-sawariyaan-blue/80 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Car className="h-16 w-16" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <MapPin className="h-12 w-12" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <Navigation className="h-20 w-20" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in">
            Your Ride, Your Way
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Experience seamless transportation with SAWARIYAAN - safe, reliable, and always on time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-sawariyaan-green hover:bg-sawariyaan-green/90 text-white px-8 py-4 text-lg">
              Book Your Ride Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sawariyaan-blue px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-sawariyaan-green mb-2">50K+</div>
              <div className="text-gray-200">Happy Riders</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-sawariyaan-green mb-2">24/7</div>
              <div className="text-gray-200">Available Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-sawariyaan-green mb-2">100+</div>
              <div className="text-gray-200">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
