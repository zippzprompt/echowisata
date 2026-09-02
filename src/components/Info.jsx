// components/Info.jsx
import { Clock, MapPin, Trees, Ticket, Phone } from "lucide-react";
import FadeInSection from "./FadeInSection";

function Info() {
  const infoItems = [
    {
      icon: Clock,
      title: "Jam Buka",
      details: ["Selasa – Minggu: 08.00 – 17.00", "Senin: Tutup"],
      note: "Libur nasional tetap buka",
      color: "text-blue-500",
    },
    {
      icon: MapPin,
      title: "Lokasi",
      details: ["Dekat Makam Roro Mendut", "Magelang, Jawa Tengah"],
      note: "Google Maps: 'Pemandian Roro Mendut'",
      color: "text-red-500",
    },
    {
      icon: Trees,
      title: "Aktivitas",
      details: ["Berenang", "Relaksasi", "Foto", "Wisata Sejarah"],
      note: "Area piknik tersedia",
      color: "text-green-500",
    },
    {
      icon: Ticket,
      title: "Harga Tiket",
      details: ["Dewasa: Rp10.000", "Anak-anak: Rp5.000"],
      note: "Gratis untuk lansia > 60 tahun",
      color: "text-yellow-500",
    },
    {
      icon: Phone,
      title: "Kontak",
      details: ["Telp: (0293) 123456", "WA: 0812-3456-7890"],
      note: "Reservasi rombongan H-2",
      color: "text-purple-500",
    },
  ];

  return (
    <section id="info" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">Informasi Praktis</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeInSection
                key={index}
                type="slide-up"
                delay={index * 150} // stagger: setiap kartu muncul 150ms setelah sebelumnya
                duration={700}
                threshold={0.2}
              >
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group h-full flex flex-col">
                  <div className="flex justify-center mb-3">
                    <Icon className={`w-10 h-10 ${item.color} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <div className="space-y-1 flex-grow">
                    {item.details.map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3 italic border-t border-gray-100 pt-2">{item.note}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Info;
