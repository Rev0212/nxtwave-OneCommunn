import React from 'react';
import { Shapes,ChevronLeft,ChevronRight} from 'lucide-react'; // Corrected import

const SegmentSection: React.FC = () => {
  const segments = [
    { title: "Residential", image: "https://res.cloudinary.com/dyiph7is1/image/upload/v1736330634/Residential_j8wyrb.jpg" },
    { title: "Institutional", image: "https://res.cloudinary.com/dyiph7is1/image/upload/v1736330633/Ins_vf45ro.jpg" },
    { title: "Commercial", image: "https://res.cloudinary.com/dyiph7is1/image/upload/v1736330633/Commercial_byspdr.jpg" },
  ];

  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Flex container for heading and Shapes */}
      <div className='flex justify-between items-center mb-6'>
        <div className="flex items-center">
          <Shapes className="rounded-full" />
          <h2 className="text-xl ml-2 font-bold text-black">Segments</h2>
        </div>
        <div className="flex gap-2">
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-50">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
      </div>
      {/* Grid layout for segments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {segments.map((segment) => (
          <div key={segment.title} className="relative group">
            <img
              src={segment.image}
              alt={segment.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30 rounded-lg">
              {/* Title container */}
              <div className="absolute top-4 left-0 right-0 text-center">
                <h3 className="text-white text-xl font-semibold">
                  {segment.title}
                </h3>
              </div>
              {/* Button container */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <button className="px-6 py-2 bg-grey text-white rounded hover:bg-black/80 transition-colors duration-300">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default SegmentSection;