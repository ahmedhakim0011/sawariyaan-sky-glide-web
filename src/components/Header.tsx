
import { Car } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-sawariyaan-blue p-2 rounded-lg">
              <Car className="h-8 w-8 text-white" alt="Sawariyaan ride-hailing app logo" />
            </div>
            <span className="text-2xl font-bold text-sawariyaan-blue">SAWARIYAAN</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
