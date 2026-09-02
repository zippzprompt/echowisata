import { Link } from "react-router-dom";

function FeatureGrid() {
  const features = [
    {
      id: 1,
      icon: "🏞️",
      title: "Keindahan Alam",
      description: "Nikmati pemandangan perbukitan hijau dan udara sejuk yang menyegarkan jiwa.",
      link: "/destinasi/1",
      size: "large",
    },
    {
      id: 2,
      icon: "💧",
      title: "Sumber Mata Air",
      description: "Air jernih yang mengalir sepanjang tahun, menyegarkan tubuh.",
      link: "/destinasi/2",
      size: "medium",
    },
    {
      id: 3,
      icon: "🏛️",
      title: "Warisan Budaya",
      description: "Dekat dengan Makam Roro Mendut, kaya akan sejarah.",
      link: "/destinasi/3",
      size: "medium",
    },
    {
      id: 4,
      icon: "🧘",
      title: "Relaksasi",
      description: "Tempat tenang untuk melepas penat dan stres.",
      link: "/destinasi/4",
      size: "small",
    },
    {
      id: 5,
      icon: "📸",
      title: "Spot Instagramable",
      description: "Setiap sudut layak diabadikan dalam foto.",
      link: "/destinasi/5",
      size: "small",
    },
    {
      id: 6,
      icon: "🌿",
      title: "Ekowisata",
      description: "Menjaga kelestarian alam dan lingkungan.",
      link: "/destinasi/6",
      size: "small",
    },
  ];

  const getSizeClass = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const getHeightClass = (size) => {
    switch (size) {
      case "large":
        return "min-h-[200px] md:min-h-[240px]";
      case "medium":
        return "min-h-[160px] md:min-h-[180px]";
      default:
        return "min-h-[140px] md:min-h-[150px]";
    }
  };

  return (
    <section className="py-8 px-6 bg-gray-50 min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header - lebih compact */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium tracking-wide mb-3">✦ Kenapa Harus ke Sini?</span>
          <h2 className="text-2xl md:text-3xl font-light text-gray-800">
            Built for <span className="font-bold text-red-700">Adventure</span>.<br />
            Inspired by <span className="font-bold text-red-700">Nature</span>.
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm leading-relaxed">Dari pemandangan hijau hingga sejarah budaya, setiap sudut Sendang Keongan dirancang untuk memperkaya pengalaman wisatamu.</p>
          <div className="w-12 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid dengan ukuran berbeda - lebih compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
          {features.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`group block bg-white p-5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100/50 hover:border-red-200 ${getSizeClass(item.size)} ${getHeightClass(item.size)}`}
            >
              {/* Ikon */}
              <div className={`flex items-center justify-center bg-red-50 rounded-full mb-3 group-hover:bg-red-100 transition duration-300 ${item.size === "large" ? "w-12 h-12" : "w-10 h-10"}`}>
                <span className={`${item.size === "large" ? "text-2xl" : "text-xl"}`}>{item.icon}</span>
              </div>

              {/* Judul */}
              <h3 className={`font-semibold text-gray-800 group-hover:text-red-700 transition duration-300 ${item.size === "large" ? "text-base" : "text-sm"}`}>{item.title}</h3>

              {/* Deskripsi */}
              <p className={`text-gray-600 mt-1 leading-relaxed ${item.size === "large" ? "text-sm" : "text-xs"}`}>{item.description}</p>

              {/* Link "Pelajari Lebih" */}
              <div className="mt-3 text-red-600 font-medium text-xs flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Pelajari Lebih
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Tombol aksi - lebih kecil */}
        <div className="text-center mt-6">
          <Link to="/destinasi/1" className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-full transition duration-300 font-medium text-sm shadow-md hover:shadow-red-400/40">
            Lihat Semua Destinasi
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;
