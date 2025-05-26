
import { Car, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sawariyaan-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-sawariyaan-green p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SAWARIYAAN</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted ride-hailing partner, committed to providing safe, reliable, and comfortable transportation services across the city.
            </p>
            <div className="flex space-x-4">
              <div className="bg-sawariyaan-green/20 p-2 rounded-lg hover:bg-sawariyaan-green transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
              <div className="bg-sawariyaan-green/20 p-2 rounded-lg hover:bg-sawariyaan-green transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-sawariyaan-green/20 p-2 rounded-lg hover:bg-sawariyaan-green transition-colors cursor-pointer">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-sawariyaan-green transition-colors">How It Works</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Economy Rides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Premium Rides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Airport Transfer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Corporate Travel</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-sawariyaan-green mt-1" />
                <div>
                  <p className="text-gray-300">support@sawariyaan.com</p>
                  <p className="text-gray-300">info@sawariyaan.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-sawariyaan-green mt-1" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">24/7 Customer Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sawariyaan-green mt-1" />
                <p className="text-gray-300">
                  123 Business Street<br />
                  City Center, State 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2024 SAWARIYAAN. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-sawariyaan-green transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
