
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className="translation-container py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              English to Assamese <span className="text-translation-primary">Translation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              A professional translation tool that accurately translates between English and Assamese. 
              Fast, reliable, and easy to use.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-translation-primary hover:bg-translation-secondary text-white px-8 py-6 text-lg h-auto">
                Start Translating Now
              </Button>
              <Button variant="outline" className="border-translation-primary text-translation-primary hover:bg-translation-accent px-8 py-6 text-lg h-auto">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-white p-2 transform rotate-1 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Translation Interface" 
                className="rounded-lg object-cover h-72 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
