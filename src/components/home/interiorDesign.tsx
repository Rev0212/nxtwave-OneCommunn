import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InteriorDesignSection = () => {
  const slides = [
    {
      title: "Kitchen Interior",
      description: "Let us help you design your kitchen. Leave the worry of mixing and matching furniture behind. Set up your space confidently by purchasing the complete look for a seamless experience.",
      image: "https://s3-alpha-sig.figma.com/img/9227/9255/4626d841074865d5367279bf8cbe986b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpLeQA-EFprZ7BNyCx6sMHr-sFLvfCAPuynNUQTrg7af10Ur-qXi738ME5y1HZTOyhJN8cJkgW-Je0ewDgHX4ahkVOfuOqRPhfSjqr5DxvBn3HCq1M16lOaKh4grut1wXblxeJoz9SVtfvEnjd-iE1TgJIjfRJ8gweZlzmfrorBL9EsF680GsuvmrhOO32ptwKa9MalG-OnwCRUCVFp7z23LhwlcbirBTa8aTeu75ZclxHnYUms65PM03EnjJfYJ6zcNALll2SBbcfpXUlfHVsXq-nS4nMzQEQVWjFSNhXBpFYEdhqsD6MNatn5h9orCbbArWLf-t6vLaimZoS~K3A__",
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-4">
      {/* Main Content */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold mb-2">Interior Designing</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-sm">
          {slides[currentSlide].description}
        </p>
        <button className="bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-800 transition-colors text-sm">
          Know More
        </button>
      </div>

      {/* Slider Section */}
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative h-80 flex justify-center items-center">
          <img
            src={slides[currentSlide].image}
            alt="Interior Design"
            className="w-3/4 h-full object-cover rounded-lg"
          />
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InteriorDesignSection;
