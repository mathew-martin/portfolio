export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg">Mathew Martin</span>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#projects" className="hover:text-black transition-colors">Projects</a>
          <a href="#experience" className="hover:text-black transition-colors">Experience</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}