import React, { useState } from 'react';
import { Search, User, ChevronDown } from 'lucide-react';

interface NavItem {
  name: string;
  hasDropdown: boolean;
  subcategories?: string[];
}

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', hasDropdown: false },
    {
      name: 'Living',
      hasDropdown: true,
      subcategories: ['Tv Units', 'Sofas', 'Recliners', 'Coffee Tables'],
    },
    {
      name: 'Storage',
      hasDropdown: true,
      subcategories: [
        'Box Shelves',
        'Shoe Rack',
        'Dressing Table',
        'Wardrobes',
      ],
    },
    { name: 'Dining', hasDropdown: true, subcategories: ['Dining Tables', 'Chairs'] },
    { name: 'Bedroom', hasDropdown: true },
    { name: 'Mattress', hasDropdown: true },
    { name: 'Study', hasDropdown: true },
    { name: 'Office', hasDropdown: true },
    { name: 'Outdoor', hasDropdown: true },
  ];

  return (
    <nav className="bg-black text-white p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src='https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__' alt="Logo" className="w-15 h-12" />
        </div>

        <div className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href="#"
                className="flex items-center gap-1 hover:text-gray-300"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      hoveredItem === item.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </a>
              {item.hasDropdown && hoveredItem === item.name && item.subcategories && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 text-black">
                  {item.subcategories.map((subcategory) => (
                    <a
                      key={subcategory}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {subcategory}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
