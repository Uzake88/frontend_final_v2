import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from '@/components/MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between bg-[#101826] fixed z-50 w-full px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-10 lg:ml-10"> {/* Adjusted gap and added left margin */}
        <Image
          src="/icons/logo.svg"  
          width={128}
          height={128}
          alt="ATutors logo"
          className="max-sm:size-10 "
        />
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
