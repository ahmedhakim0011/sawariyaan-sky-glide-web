
import { Car, MapPin, Navigation } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import EmailSignup from "./EmailSignup";

const ComingSoonHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sawariyaan-blue to-sawariyaan-blue/80 text-white py-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Car className="h-16 w-16" alt="Sawariyaan ride app icon" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <MapPin className="h-12 w-12" alt="Karachi location marker" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
          <Navigation className="h-20 w-20" alt="Smart route navigation" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-sawariyaan-green text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide animate-slide-in">
              Coming Soon to Karachi
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-in" style={{ animationDelay: '0.1s' }}>
            SAWARIYAAN
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-4 text-sawariyaan-green font-semibold animate-slide-in" style={{ animationDelay: '0.15s' }}>
            Ride-Hailing in Karachi Made Smarter
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-slide-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Experience the future of transportation in Karachi. Safe, reliable, and seamless ride-booking with premium vehicles, real-time tracking, and AI-powered smart routing at your fingertips.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12 animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-6 text-sawariyaan-green">Launch Countdown for Karachi</h3>
            <CountdownTimer />
          </div>

          {/* Email Signup */}
          <div className="mb-16 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4">Get Notified When We Launch in Karachi</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of Karachi residents waiting for the next generation of ride-hailing services. Be among the first to experience premium transportation.
            </p>
            <EmailSignup />
          </div>

          {/* Preview Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Car className="h-8 w-8 text-sawariyaan-green mb-3 mx-auto" alt="Premium vehicle fleet icon" />
              <h4 className="font-semibold mb-2">Premium Fleet in Karachi</h4>
              <p className="text-sm text-gray-300">Modern, comfortable vehicles for Karachi's roads</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="h-8 w-8 text-sawariyaan-green mb-3 mx-auto" alt="Real-time GPS tracking icon" />
              <h4 className="font-semibold mb-2">Live Tracking</h4>
              <p className="text-sm text-gray-300">Know exactly where your ride is in real-time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Navigation className="h-8 w-8 text-sawariyaan-green mb-3 mx-auto" alt="AI-powered smart routing icon" />
              <h4 className="font-semibold mb-2">Smart Routes for Karachi</h4>
              <p className="text-sm text-gray-300">AI-powered navigation for fastest routes in the city</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonHero;
