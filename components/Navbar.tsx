import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">NonProfit</div>
        <div>
          <Link href="/" className="mx-2 hover:underline">Home</Link>
          <Link href="/about" className="mx-2 hover:underline">About</Link>
          <Link href="/hackathon" className="mx-2 hover:underline">Hackathon</Link>
          <Link href="/gallery" className="mx-2 hover:underline">Gallery</Link>
          <Link href="/donate" className="mx-2 hover:underline">Donate</Link>
          <Link href="/contact" className="mx-2 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
