// components/ContactForm.jsx
import { useState, useEffect } from "react";
import { X, Send, Calendar, Users, User, Mail, Phone } from "lucide-react";

function ContactForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    ticketCount: 1,
    visitDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Cegah scroll body saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", form);
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      ticketCount: 1,
      visitDate: "",
      message: "",
    });
    setTimeout(() => {
      setSubmitted(false);
      onClose(); // tutup modal setelah sukses
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative">
        {/* Header dengan gradien */}
        <div className="relative bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-5 text-white">
          <button onClick={onClose} className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-semibold">Booking Tiket</h2>
          <p className="text-sm text-white/80 mt-1">Isi data untuk memesan tiket masuk</p>
        </div>

        {/* Form */}
        <div className="p-6">
          {submitted && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-xl text-center text-sm flex items-center justify-center gap-2">
              <span>✔️</span> Pesan berhasil! Kami akan hubungi Anda.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nama */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Nama lengkap"
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Nomor WhatsApp"
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>

            {/* Jumlah Tiket & Tanggal */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="number"
                  name="ticketCount"
                  value={form.ticketCount}
                  onChange={handleChange}
                  min="1"
                  placeholder="Jumlah"
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="date"
                  name="visitDate"
                  value={form.visitDate}
                  onChange={handleChange}
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Pesan */}
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="2"
                placeholder="Catatan tambahan (opsional)"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
              />
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/30"
            >
              <Send className="w-4 h-4" />
              Kirim Pemesanan
            </button>
          </form>

          {/* Footer kecil */}
          <p className="text-center text-xs text-gray-400 mt-4">Kami akan merespon dalam 1x24 jam</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
