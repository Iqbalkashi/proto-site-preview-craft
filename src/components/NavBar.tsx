
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="translation-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-translation-primary">TranslateAssamese</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-translation-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/" className="text-gray-600 hover:text-translation-primary transition-colors font-medium">
              Features
            </Link>
            <Link to="/" className="text-gray-600 hover:text-translation-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/" className="text-gray-600 hover:text-translation-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex border-translation-primary text-translation-primary hover:bg-translation-accent">
              Login
            </Button>
            <Button className="bg-translation-primary hover:bg-translation-secondary text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
