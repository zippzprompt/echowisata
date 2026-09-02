// components/Facilities.jsx
import { Car, Bath, Landmark, TreePine, Utensils, Wifi } from "lucide-react";
import FadeInSection from "./FadeInSection";

function Facilities() {
  const facilities = [
    {
      icon: Car,
      name: "Area Parkir",
      desc: "Luas dan aman untuk kendaraan roda dua dan empat",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      hoverColor: "group-hover:bg-blue-100",
    },
    {
      icon: Bath,
      name: "Toilet",
      desc: "Bersih dan terawat, tersedia di beberapa titik",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      hoverColor: "group-hover:bg-teal-100",
    },
    {
      icon: Landmark,
      name: "Mushola",
      desc: "Tempat ibadah yang nyaman dan bersih",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      hoverColor: "group-hover:bg-emerald-100",
    },
    {
      icon: TreePine,
      name: "Gazebo",
      desc: "Tempat istirahat dengan pemandangan alam",
      color: "text-green-500",
      bgColor: "bg-green-50",
      hoverColor: "group-hover:bg-green-100",
    },
    {
      icon: Utensils,
      name: "Warung Makan",
      desc: "Berbagai pilihan makanan dan minuman lokal",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      hoverColor: "group-hover:bg-orange-100",
    },
    {
      icon: Wifi,
      name: "Wi-Fi",
      desc: "Akses internet gratis di area tertentu",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      hoverColor: "group-hover:bg-indigo-100",
    },
  ];

  return (
    <section id="fasilitas" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">Fasilitas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeInSection
                key={index}
                type="slide-up"
                delay={index * 150} // Stagger: 150ms antar kartu
                duration={700}
                threshold={0.2}
              >
                <div className={`group relative p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-${item.color.split("-")[1]}-200 h-full flex flex-col`}>
                  {/* Lingkaran ikon dengan background */}
                  <div className={`w-14 h-14 rounded-full ${item.bgColor} ${item.hoverColor} transition-colors duration-300 flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-7 h-7 ${item.color} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 text-center">{item.name}</h3>
                  <p className="text-gray-500 text-sm text-center mt-2 leading-relaxed flex-grow">{item.desc}</p>

                  {/* Garis dekoratif bawah saat hover */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 ${item.color.replace("text", "bg")} group-hover:w-1/2 transition-all duration-300`} />
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
