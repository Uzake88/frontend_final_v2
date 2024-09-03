'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';

// Define your sidebar links here
const sidebarLinks = [
  { label: 'Home', route: '/', imgUrl: '/icons/home.svg' },
  { label: 'Find a Tutor', route: '/find-tutor', imgUrl: '/icons/find-tutor.svg' },
  { label: 'Become a Tutor', route: '/become-tutor', imgUrl: '/icons/become-tutor.svg' },
  { label: 'About Us', route: '/about', imgUrl: '/icons/about-us.svg' },
  { label: 'Contact', route: '/contact', imgUrl: '/icons/contact.svg' },
  { label: 'Pricing', route: '/pricing', imgUrl: '/icons/pricing.svg' },
];

// Sidebar Component Props Interface
interface SidebarProps {
  children: React.ReactNode; // To render main content
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? ''; // Fallback to empty string if pathname is null

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        className={cn(
          'fixed top-4 left-4 z-50 p-2 text-white rounded-full transition-all focus:outline-none',
          {
            'bg-blue-500': isOpen,
            'bg-transparent': !isOpen,
          }
        )}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-screen w-64 bg-[#003768] p-6 pt-28 text-white transition-transform duration-300 ease-in-out z-40',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen,
          }
        )}
      >
        <nav className="flex flex-col gap-6">
          {sidebarLinks.map((link) => {
            const isActive =
              pathname === link.route || pathname.startsWith(`${link.route}/`);

            return (
              <Link
                href={link.route}
                key={link.label}
                className={cn(
                  'flex gap-4 items-center p-4 rounded-lg justify-start transition-colors hover:bg-blue-600',
                  {
                    'bg-blue-1': isActive,
                  }
                )}
                onClick={() => setIsOpen(false)} // Close sidebar on link click
              >
                <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
                <span className="text-lg font-semibold">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Main Content */}
      <main
        className={cn(
          'flex-1 transition-all duration-300 ease-in-out p-6',
          {
            'ml-64': isOpen, // Shift main content right when sidebar is open
            'ml-0': !isOpen, // No shift when sidebar is closed
          }
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
