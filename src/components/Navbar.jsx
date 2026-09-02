// components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ onBookingClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Deteksi scroll untuk background & hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background blur setelah scroll 50px
      setScrolled(currentScrollY > 50);

      // Sembunyikan navbar saat scroll ke bawah, muncul saat scroll ke atas
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleBookingClick = () => {
    if (onBookingClick) {
      onBookingClick();
    }
    setIsOpen(false);
  };

  // Cek apakah menu aktif (untuk underline)
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"} ${isVisible ? "translate-y-0" : "-translate-y-full"} px-4 md:px-8 py-4`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo dengan animasi fade-in saat load */}
        <Link to="/" className={`text-2xl font-light tracking-wide transition-all duration-300 ${scrolled ? "text-red-700" : "text-white"} hover:text-red-400 transform hover:scale-105`}>
          Echowisata
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("hero")} className={`relative transition-colors font-medium ${scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"} group`}>
            Beranda
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </button>

          <Link to="/destinasi/1" className={`relative transition-colors font-medium ${scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"} group`}>
            Destinasi
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${isActive("/destinasi/1") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>

          <button onClick={() => scrollToSection("about")} className={`relative transition-colors font-medium ${scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"} group`}>
            Tentang
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button onClick={handleBookingClick} className={`relative transition-colors font-medium ${scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"} group`}>
            Kontak
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </button>

          {/* CTA Button dengan animasi pulse */}
          <button
            onClick={handleBookingClick}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:scale-105 ${
              scrolled ? "bg-red-700 hover:bg-red-800 text-white" : "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
            } animate-pulse-slow`}
          >
            Pesan Sekarang
          </button>
        </div>

        {/* Tombol Hamburger dengan animasi */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none relative w-6 h-6" aria-label="Toggle menu">
          <span className={`absolute left-0 h-0.5 w-6 transition-all duration-300 ease-in-out ${scrolled ? "bg-gray-700" : "bg-white"} ${isOpen ? "top-3 rotate-45" : "top-1 rotate-0"}`} />
          <span className={`absolute left-0 top-3 h-0.5 w-6 transition-all duration-300 ease-in-out ${scrolled ? "bg-gray-700" : "bg-white"} ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute left-0 h-0.5 w-6 transition-all duration-300 ease-in-out ${scrolled ? "bg-gray-700" : "bg-white"} ${isOpen ? "top-3 -rotate-45" : "top-5 rotate-0"}`} />
        </button>
      </div>

      {/* Menu Mobile dengan animasi slide down */}
      <div
        className={`md:hidden mt-4 p-4 rounded-xl flex flex-col space-y-3 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 p-0"} ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/10 backdrop-blur-md border border-white/20"
        }`}
      >
        <button onClick={() => scrollToSection("hero")} className={`text-left px-2 py-1 transition-colors ${scrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-white/80"}`}>
          Beranda
        </button>

        <Link to="/destinasi/1" onClick={() => setIsOpen(false)} className={`px-2 py-1 transition-colors ${scrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-white/80"}`}>
          Destinasi
        </Link>

        <button onClick={() => scrollToSection("about")} className={`text-left px-2 py-1 transition-colors ${scrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-white/80"}`}>
          Tentang
        </button>

        <button onClick={handleBookingClick} className={`text-left px-2 py-1 transition-colors ${scrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-white/80"}`}>
          Kontak
        </button>

        <button
          onClick={handleBookingClick}
          className={`text-center px-4 py-2 rounded-full font-medium transition ${scrolled ? "bg-red-700 hover:bg-red-800 text-white" : "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"}`}
        >
          Pesan Sekarang
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
