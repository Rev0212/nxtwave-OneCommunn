import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/hero';
import CategoryGrid from '../components/home/categoryGrid';
import TrendingProducts from '../components/home/trendingSection';
import SegmentSection from '../components/home/segmentSection';
import InteriorDesignSection from '../components/home/interiorDesign';
import AboutUs from '../components/home/aboutUs';
import ProcessSteps from '../components/home/processSteps'; 
import WhyWeStandOut from '../components/home/why';
import Footer from '../components/home/footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryGrid />
      <SegmentSection/>
      <TrendingProducts />
      <InteriorDesignSection />
      <AboutUs/>
      <ProcessSteps/>
      <WhyWeStandOut/> 
      <Footer />
    </div>
  );
};

export default Home;