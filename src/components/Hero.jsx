import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";
function Hero() {
  // Daftar gambar untuk slideshow
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",
    "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=1600",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image dengan efek transisi */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        {images.map((img, index) => (
          <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url(${img})` }} />
        ))}
        {/* Overlay gradasi dengan sentuhan merah */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-red-900/30"></div>
      </div>

      {/* Konten Hero - Center Vertikal, dengan padding untuk navbar */}
      {/* Konten Hero - Center total */}
      <FadeInSection duration={700} delay={200}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-6 pt-20 pb-12">
          {/* Judul */}
          <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight mb-4 animate-fade-in-delay text-white">Sendang Keongan</h1>

          {/* Deskripsi */}
          <p className="text-md font-light mb-8 max-w-2xl leading-relaxed text-white/90 animate-fade-in-delay-2">Temukan ketenangan di sumber mata air alami yang jernih, dikelilingi pepohonan rimbun dan sejarah budaya Magelang.</p>

          {/* Tombol aksi */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-3">
            <a href="#about" className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white rounded-full transition duration-300 font-medium shadow-lg hover:shadow-red-700/40">
              Jelajahi Sekarang
            </a>
          </div>

          {/* Statistik kecil - menambah kesan kredibel */}
        </div>
      </FadeInSection>
    </section>
  );
}

export default Hero;
