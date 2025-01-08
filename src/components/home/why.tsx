import React from 'react';
import { Box, ShoppingBag, Check, Palette } from 'lucide-react';

const WhyWeStandOut: React.FC = () => {
  const features = [
    {
      icon: <Box className="w-8 h-8" />,
      title: "500+ Collections",
      description: "Explore our vast collection of premium furniture pieces and home decor items"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "100+ Fabrics",
      description: "Choose from our extensive range of high-quality fabrics and materials"
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Top-notch Quality",
      description: "Every piece is crafted with attention to detail and premium materials"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom color length customization",
      description: "Personalize your furniture with custom colors and dimensions"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Vibrator Stands Out?</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center h-48 w-50"
            >
              <div className="mb-4 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-sm text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeStandOut;