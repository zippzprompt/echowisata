function Testimonials() {
  const testimonials = [
    { name: "Budi", text: "Tempatnya sejuk dan airnya sangat jernih. Cocok untuk liburan keluarga.", rating: 5 },
    { name: "Siti", text: "Saya suka suasana tenang dan pemandangan hijau. Recommended!", rating: 4 },
    { name: "Agus", text: "Dekat dengan makam Roro Mendut, jadi bisa wisata religi sekaligus.", rating: 5 },
  ];

  const renderStars = (rate) => {
    return "⭐".repeat(rate) + "☆".repeat(5 - rate);
  };

  return (
    <section id="ulasan" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">Ulasan Pengunjung</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-2xl mb-2">{renderStars(item.rating)}</div>
              <p className="text-gray-600 italic">"{item.text}"</p>
              <p className="mt-4 font-medium text-gray-800">– {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
