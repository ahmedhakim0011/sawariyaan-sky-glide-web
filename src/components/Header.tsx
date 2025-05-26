
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-sawariyaan-blue p-2 rounded-lg">
              <Car className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-sawariyaan-blue">SAWARIYAAN</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-sawariyaan-blue transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-sawariyaan-blue transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-sawariyaan-blue transition-colors">
              How It Works
            </a>
            <a href="#contact" className="text-gray-700 hover:text-sawariyaan-blue transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-sawariyaan-blue text-sawariyaan-blue hover:bg-sawariyaan-blue hover:text-white">
              Download App
            </Button>
            <Button className="bg-sawariyaan-green hover:bg-sawariyaan-green/90 text-white">
              Drive with Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-gray-700 hover:text-sawariyaan-blue transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-sawariyaan-blue transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-sawariyaan-blue transition-colors">
                How It Works
              </a>
              <a href="#contact" className="text-gray-700 hover:text-sawariyaan-blue transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-sawariyaan-blue text-sawariyaan-blue hover:bg-sawariyaan-blue hover:text-white">
                  Download App
                </Button>
                <Button className="bg-sawariyaan-green hover:bg-sawariyaan-green/90 text-white">
                  Drive with Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
