
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import TranslationTool from '@/components/TranslationTool';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Translation Tool Section */}
        <section className="py-16 bg-translation-background">
          <div className="translation-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Translating Now</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our powerful tool provides fast and accurate translations between English and Assamese
              </p>
            </div>
            
            <TranslationTool />
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="translation-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Why choose our English to Assamese translation tool
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Accurate Translation"
                description="Our advanced algorithms ensure high quality and contextually accurate translations between English and Assamese."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}
              />
              
              <FeatureCard
                title="Fast & Reliable"
                description="Get instant translations with high reliability, even for complex sentences and technical content."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>}
              />
              
              <FeatureCard
                title="Easy to Use"
                description="Simple, intuitive interface designed for all users, whether you're translating a single word or entire documents."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>}
              />
              
              <FeatureCard
                title="Cultural Sensitivity"
                description="Our translations respect cultural nuances and regional differences in both languages."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}
              />
              
              <FeatureCard
                title="Multiple Input Methods"
                description="Type, paste, or upload files - our tool supports various ways to input text for translation."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>}
              />
              
              <FeatureCard
                title="Privacy Focused"
                description="Your data is secure with us - we don't store or share your translations with third parties."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>}
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-translation-accent">
          <div className="translation-container">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Translating?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied users who trust our translation tool for accurate English to Assamese translations
              </p>
              <button className="bg-translation-primary hover:bg-translation-secondary text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Get Started for Free
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
