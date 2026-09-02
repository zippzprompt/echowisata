import { useState } from "react";

function FAQ() {
  const faqs = [
    { q: "Apa saja yang perlu dibawa?", a: "Bawa baju ganti, handuk, sunblock, dan perlengkapan renang. Jangan lupa kamera untuk mengabadikan momen." },
    { q: "Apakah ada tiket masuk?", a: "Ya, tiket masuk Rp 10.000/orang. Anak-anak di bawah 5 tahun gratis." },
    { q: "Jam operasional?", a: "Buka setiap Selasa–Minggu pukul 08.00–17.00. Senin tutup untuk perawatan." },
    { q: "Boleh membawa makanan sendiri?", a: "Tentu boleh. Tersedia area piknik dan gazebo." },
    { q: "Apakah ada penginapan di sekitar?", a: "Ada beberapa homestay dan hotel di sekitar Magelang yang bisa dipesan." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button onClick={() => toggle(index)} className="w-full text-left px-6 py-4 font-medium text-gray-800 hover:bg-gray-100 transition flex justify-between items-center">
                <span>{item.q}</span>
                <span className="text-teal-600">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
