// components/About.jsx
import { MapPin, Star } from "lucide-react"; // hanya impor yang dibutuhkan
import FadeInSection from "./FadeInSection";

function About() {
  return (
    <FadeInSection duration={1000} delay={400} threshold={0.5}>
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* KOLOM KIRI - Gambar */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-tr from-red-300/30 via-red-400/20 to-red-300/30 rounded-3xl blur-2xl group-hover:blur-3xl transition duration-700"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-300/40 group-hover:shadow-red-400/50 transition duration-500">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop"
                  alt="Sendang Keongan - Wisata Alam Magelang"
                  className="w-full h-[400px] md:h-[500px] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Label lokasi dengan ikon MapPin */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-white/50">
                  <p className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4" strokeWidth={2} />
                    Grobogan, Jawa Tengah
                  </p>
                </div>

                <div className="absolute flex gap-1 top-4 right-4 bg-red-700/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" strokeWidth={2} /> <span>4.8 / 5</span>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN - Konten */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-medium tracking-wide">✦ Wisata Alam & Budaya</span>

              <h2 className="text-3xl md:text-4xl font-light text-gray-800">
                Tentang <span className="font-bold text-red-700">Sendang Keongan</span>
              </h2>

              <div className="w-16 h-1 bg-red-700 rounded-full"></div>

              <p className="text-gray-600 leading-relaxed text-base">
                <span className="font-semibold text-red-700">Sendang Keongan</span> adalah destinasi wisata alam yang menyuguhkan sumber mata air jernih di lereng perbukitan Magelang. Airnya yang segar dan sejuk mengalir sepanjang tahun,
                menjadikannya tempat favorit untuk relaksasi dan wisata keluarga.
              </p>

              {/* Statistik */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-300 transition duration-300 text-center">
                  <p className="text-2xl font-bold text-red-700">500+</p>
                  <p className="text-xs text-gray-500 mt-1">Pengunjung/Bulan</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-300 transition duration-300 text-center">
                  <p className="text-2xl font-bold text-red-700">4.8</p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                    Rating <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" strokeWidth={2} />
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-300 transition duration-300 text-center">
                  <p className="text-2xl font-bold text-red-700">10+</p>
                  <p className="text-xs text-gray-500 mt-1">Fasilitas</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-300 transition duration-300 text-center">
                  <p className="text-2xl font-bold text-red-700">7</p>
                  <p className="text-xs text-gray-500 mt-1">Tahun Berdiri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default About;
