import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const leftColumnLinks = [
    'Home', 'Living', 'Storage', 'Dining', 'Bedroom', 'Mattress', 
    'Study', 'Office', 'Outdoor'
  ];

  const rightColumnLinks = [
    'Residential', 'Institutional', 'Commercial'
  ];

  return (
    <footer className="bg-black text-white pt-8 pb-4">
  <div className="container mx-auto px-4">
    <div className="grid flex flex-row grid-cols-1 md:grid-cols-12 gap-4">
      
      <div className="md:col-span-4 flex flex-col">
        <div className="mb-4">
          <img src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__" alt="Logo" className="w-16 h-16" />
        </div>
        <p className="text-sm text-gray-300 leading-tight mb-4">
          Your dream space deserves the best execution and that's where
          United BuildPro Pvt Ltd excels. Our construction services
          encompass everything from foundational work to structural builds,
          tailored to residential, commercial, and industrial needs.
        </p>
        <div className="flex space-x-2">
          <a href="#" className="text-white hover:text-gray-300">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="md:col-span-8 flex gap-4 items-center justify-end md-2">
        <div>
          <ul className="space-y-1">
            {leftColumnLinks.map(link => (
              <li key={link}>
                <a href="#" className="text-gray-300 hover:text-white text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-1">
            {rightColumnLinks.map(link => (
              <li key={link}>
                <a href="#" className="text-gray-300 hover:text-white text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    
    <div className="border-t border-white-800 p-2 mt-2">
      <div className="flex flex-col justify-between items-center">
        <p className="text-gray-400 text-sm mb-2 md:mb-0">
          2024 © All rights reserved - Cozy Comfort
        </p>
        <div className="flex space-x-2">
          <img src="https://s3-alpha-sig.figma.com/img/3ab9/eeb0/e196ede389387ab9e06d10d71ce9b10e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNTwUY4uSrRu2N7zb5JVUSxrebvHcRD16NWb6iCg~nP9UvpRlYMSof~ZUorH0ehgJFPOFR9wmDxuzdDoq-ez5fgNVVg4XdLzitmu5T~HKn1SS20Ox~ST5gis5Kp60DTVNn8OO8VgeNhOR3X0xIrGn8LXHEwdp~OFMluGXPRJMWsEeoU5PBpG93z45rOKcIaB4Lhk5CJA7Dw6BpLnPJL~VXfAzanIznxxRYq3EP1wi3JXo1i4oeKlBufOjH5IgKmaTu2PpmamU-KzrR91OaddMfoylzO8dibDAWYwRGh7p38g~QQx5H4w~EYAF5lKEmoP76bsyG7w0xMBCmtBRnmHcQ__" alt="Payment" />
        </div>
      </div>
     
    </div>
    
  </div>
</footer>
  );
};

export default Footer;
