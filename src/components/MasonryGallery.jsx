import { Link } from "react-router-dom";

// Tambahkan beberapa gambar lagi agar kolom lebih terisi (kunci utama mengatasi ruang kosong)
const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop", title: "Sumber Air Jernih", desc: "Air mengalir sepanjang tahun", height: "h-[400px]" },
  { id: 2, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop", title: "Pemandangan Hijau", desc: "Perbukitan yang menenangkan", height: "h-[250px]" },
  { id: 3, src: "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=600&h=600&fit=crop", title: "Kehijauan Alam", desc: "Rimbun dan sejuk", height: "h-[300px]" },
  { id: 4, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=900&fit=crop", title: "Relaksasi", desc: "Tempat tenang", height: "h-[450px]" },
  { id: 5, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=350&fit=crop", title: "Area Piknik", desc: "Bersantai bersama keluarga", height: "h-[220px]" },
  { id: 6, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=500&fit=crop", title: "Spot Instagramable", desc: "Abadikan momen", height: "h-[280px]" },
  // Tambahkan gambar ekstra agar kolom kanan tidak kosong
  { id: 7, src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop", title: "Danau Tenang", desc: "Suasana damai", height: "h-[250px]" },
  //   { id: 8, src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=350&fit=crop", title: "Pegunungan", desc: "Udara segar", height: "h-[220px]" },
];
function MasonryGallery() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header tetap sama */}
        <div className="space-y-6">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-medium tracking-wide">✦ Wisata Alam & Budaya</span>

          {/* Judul */}
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Galery <span className="font-light text-red-700">Sendang Keongan</span>
          </h2>

          {/* Garis dekoratif */}
          <div className="w-16 h-1 bg-red-700 rounded-full"></div>
        </div>
        ;{/* GANTI MASONRY DENGAN CSS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[700px] grid-auto-rows-fr">
          {images.map((img, index) => (
            <Link
              key={img.id}
              to="/destinasi/1"
              /* 
                 TIPS: Untuk membuat layout lebih dinamis, 
                 kita beri class row-span pada kartu tertentu 
                 agar memanjang vertikal dan mengisi ruang.
              */
              className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full w-full ${
                index === 0 || index === 3 ? "row-span-2" : "" // Kartu 1 & 4 memanjang vertikal
              }`}
            >
              {/* Pastikan tinggi kartu 100% agar mengisi grid */}
              <div className="w-full h-full bg-gray-200 relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400?text=Gambar+Tidak+Ditemukan";
                  }}
                />
              </div>

              {/* Overlay hover tetap sama */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-semibold text-sm">{img.title}</h4>
                <p className="text-white/80 text-xs">{img.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">{/* Tombol Lihat Semua tetap sama */}</div>
      </div>
    </section>
  );
}

export default MasonryGallery;
