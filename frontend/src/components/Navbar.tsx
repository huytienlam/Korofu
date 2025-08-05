import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-10 lg:px-20 bg-[#FFF5F1]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        <div className="flex items-center">
          <Link href="/" className="">
            <Image
              src="/assets/logo/Korofu-full.svg"
              alt="Korofu Logo"
              width={150}
              height={45}
              priority
            />
          </Link>
        </div>
        
        <div className="flex items-center justify-center space-x-12">
          <Link href="/" className="text-[#21120D]">
            Home
          </Link>
          <Link href="/preview" className="text-[#21120D] font-extrabold text-lg">
            Preview
          </Link>
          <Link href="/about" className="text-[#21120D] font-extrabold text-lg">
            About
          </Link>
          <Link href="/contact" className="text-[#21120D] font-extrabold text-lg">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-[#00E5A1] text-black rounded-lg hover:bg-[#00D194] transition-colors font-medium border-[1.5px] border-black">
            Log In
          </button>
          <button className="px-6 py-2 bg-[#FF8FE5] text-black rounded-lg hover:bg-[#FF7AE0] transition-colors font-medium border-[1.5px] border-black">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;