import BestSelling from '@/components/bestselling';
import Catagorries from '@/components/catasgories';
import Footer from '@/components/footer';
import Hero from '@/components/hero'
import Promotion from '@/components/promotion';
import Services from '@/components/services';
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <Services />
        </div>
      </section>
      
      {/* Promotion Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <Promotion />
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <Catagorries />
        </div>
      </section>
      
      {/* Best Selling Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Best Selling Products</h2>
          <BestSelling />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
