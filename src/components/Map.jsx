function Map() {
  return (
    <section id="lokasi" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">Temukan Kami</h2>
        <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126709.57170916616!2d110.8598393!3d-7.0475278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70bed2f2fe2507%3A0xaeb51efe38c5f015!2sSendang%20Keongan!5e0!3m2!1sid!2sid!4v1788262411423!5m2!1sid!2sid"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Sendang Keongan"
          ></iframe>
        </div>
        <p className="mt-4 text-gray-600 text-sm">📍 Sendang Keongan Penganten, Kec. Klambu, Kabupaten Grobogan, Jawa Tengah</p>
      </div>
    </section>
  );
}

export default Map;
