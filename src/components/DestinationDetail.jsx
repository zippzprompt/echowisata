import { useParams, Link } from "react-router-dom";

// Data dummy destinasi (bisa diganti dengan data dari API nanti)
const destinations = {
  1: {
    name: "Sendang Keongan",
    description: "Sumber mata air alami yang jernih dan segar, dikelilingi pepohonan rimbun. Tempat yang cocok untuk bersantai dan menikmati ketenangan alam.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    location: "Dekat Makam Roro Mendut, Magelang",
    openHours: "Selasa-Minggu, 08:00-17:00",
    price: "Rp 10.000/orang",
  },
  2: {
    name: "Makam Roro Mendut",
    description: "Makam bersejarah dengan arsitektur kuno yang menyimpan cerita tentang legenda Roro Mendut. Tempat ziarah dan wisata budaya.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    location: "Mendut, Magelang",
    openHours: "Setiap hari, 06:00-18:00",
    price: "Gratis",
  },
  // bisa tambah lebih banyak
};

function DestinationDetail() {
  const { id } = useParams();
  const dest = destinations[id];

  if (!dest) {
    return (
      <div className="pt-24 text-center text-gray-600">
        <h2 className="text-2xl">Destinasi tidak ditemukan</h2>
        <Link to="/" className="text-teal-600 hover:underline">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <Link to="/" className="inline-block text-teal-600 hover:underline mb-6">
        &larr; Kembali
      </Link>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img src={dest.image} alt={dest.name} className="w-full h-80 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-light text-gray-800 mb-4">{dest.name}</h1>
          <p className="text-gray-600 leading-relaxed mb-4">{dest.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <span className="font-medium">📍 Lokasi:</span> {dest.location}
            </div>
            <div>
              <span className="font-medium">🕐 Jam Buka:</span> {dest.openHours}
            </div>
            <div>
              <span className="font-medium">💰 Harga:</span> {dest.price}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationDetail;
