function Activities() {
  const activities = [
    { name: "Berenang", desc: "Segarkan diri di air jernih yang sejuk" },
    { name: "Piknik", desc: "Nikmati bekal bersama keluarga di area hijau" },
    { name: "Fotografi", desc: "Abadikan momen dengan latar alam yang indah" },
    { name: "Trekking", desc: "Jelajahi jalur setapak di sekitar perbukitan" },
    { name: "Wisata Sejarah", desc: "Kunjungi makam Roro Mendut yang bersejarah" },
    { name: "Meditasi", desc: "Temukan ketenangan di tengah suara alam" },
  ];

  return (
    <section id="aktivitas" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">Aktivitas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-medium text-teal-700">{act.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{act.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
