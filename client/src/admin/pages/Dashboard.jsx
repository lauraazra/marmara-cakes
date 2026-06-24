export default function AdminDashboard() {
  // Data dummy untuk visualisasi dashboard
  const stats = [
    {
      label: "Total Produk",
      value: "48",
      icon: "🍰",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Pesanan Hari Ini",
      value: "124",
      icon: "📦",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Total Cabang",
      value: "6",
      icon: "📍",
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Pendapatan (Mei)",
      value: "Rp 82.4M",
      icon: "💰",
      color: "bg-custom-purple/10 text-custom-purple",
    },
  ];

  const recentOrders = [
    {
      id: "#MC-9021",
      customer: "Budi Santoso",
      items: "Tiramisu Large",
      total: "Rp 245.000",
      status: "Selesai",
    },
    {
      id: "#MC-9022",
      customer: "Siska Amelia",
      items: "Red Velvet Box",
      total: "Rp 185.000",
      status: "Proses",
    },
    {
      id: "#MC-9023",
      customer: "Rizky Fauzi",
      items: "Chocolate Fudge",
      total: "Rp 210.000",
      status: "Siap Ambil",
    },
    {
      id: "#MC-9024",
      customer: "Dewi Lestari",
      items: "Cheese Cake 15cm",
      total: "Rp 165.000",
      status: "Selesai",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* 1. Header Greeting */}
      <div>
        <h2 className="text-2xl font-black text-zinc-950 tracking-tight">
          Selamat Datang, Admin Marmara! 👋
        </h2>
        <p className="text-sm text-zinc-500 mt-1">
          Berikut adalah ringkasan performa toko kue Anda hari ini, 20 Mei 2026.
        </p>
      </div>

      {/* 2. Statistik Ringkas (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex items-center gap-4"
          >
            <div
              className={`h-12 w-12 rounded-xl flex items-center justify-center text-xl ${stat.color}`}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </p>
              <h4 className="text-xl font-black text-zinc-900">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Grid Utama: Grafik (Placeholder) & Status Cabang */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Visualisasi Tren Penjualan (Placeholder Chart) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-black text-zinc-900">
              Tren Penjualan Mingguan
            </h3>
            <select className="text-xs font-bold bg-zinc-50 border-zinc-200 rounded-lg px-3 py-1.5 focus:outline-none">
              <option>7 Hari Terakhir</option>
              <option>30 Hari Terakhir</option>
            </select>
          </div>
          {/* Box Placeholder Grafik */}
          <div className="h-64 bg-zinc-50 rounded-xl border border-dashed border-zinc-200 flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 text-zinc-200 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            <p className="text-xs font-medium text-zinc-400 italic">
              Integrasikan library Recharts/Chart.js di sini
            </p>
          </div>
        </div>

        {/* Status Performa Cabang (PRD Terintegrasi) */}
        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
          <h3 className="font-black text-zinc-900 mb-6">Status 6 Cabang</h3>
          <div className="space-y-4">
            {[
              "Tasikmalaya",
              "Garut",
              "Banjar",
              "Bandung",
              "Ciamis",
              "Majenang",
            ].map((city, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-bold text-zinc-700">
                    {city}
                  </span>
                </div>
                <span className="text-[10px] font-black text-zinc-400 bg-zinc-50 px-2 py-0.5 rounded uppercase group-hover:text-custom-purple transition-colors">
                  Online
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Pesanan Terbaru (Tabel) */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
          <h3 className="font-black text-zinc-900">
            Aktivitas Pesanan Terbaru
          </h3>
          <button className="text-xs font-bold text-custom-purple hover:underline">
            Lihat Semua
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-50/50">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                  ID Order
                </th>
                <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                  Customer
                </th>
                <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                  Produk
                </th>
                <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                  Total
                </th>
                <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {recentOrders.map((order, i) => (
                <tr key={i} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-black text-zinc-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-zinc-600">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-500">
                    {order.items}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-zinc-900">
                    {order.total}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-[10px] font-black px-2.5 py-1 rounded-lg uppercase ${
                        order.status === "Selesai"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
