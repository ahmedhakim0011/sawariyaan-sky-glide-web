
import { Car, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sawariyaan-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-sawariyaan-green p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" alt="Sawariyaan logo" />
            </div>
            <span className="text-xl font-bold">SAWARIYAAN</span>
          </div>

          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Karachi's most anticipated ride-hailing app is launching soon. Experience premium transportation with advanced technology and reliable service across the city.
          </p>

          {/* Contact Info */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-sawariyaan-green" alt="Email contact" />
              <span className="text-sm text-gray-300">info@sawariyaan.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-sawariyaan-green" alt="Service location" />
              <span className="text-sm text-gray-300">Launching in Karachi, Pakistan</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-300 text-sm">
              © 2024 SAWARIYAAN. All rights reserved. | Ride-Hailing Services Coming Soon to Karachi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
