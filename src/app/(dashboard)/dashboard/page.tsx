import { getAllDonations } from "@/service/donation";

const monthly = [
  { month: "Apr", value: 3.2 },
  { month: "May", value: 4.5 },
  { month: "Jun", value: 2.8 },
  { month: "Jul", value: 5.6 },
  { month: "Aug", value: 4.1 },
  { month: "Sep", value: 6.3 },
];

const categories = [
  { name: "💧 Water & Sanitation", percent: 35, color: "bg-blue-500" },
  { name: "📚 Education", percent: 25, color: "bg-emerald-500" },
  { name: "🩺 Healthcare", percent: 22, color: "bg-rose-500" },
  { name: "🏠 Shelter", percent: 18, color: "bg-amber-500" },
];

const projects = [
  {
    title: "Pani Shuddhokoron Plant",
    duration: "6 mash",
    location: "Sirajganj",
    beneficiary: "300 families",
    expense: "৳5,00,000",
    status: "Ongoing",
  },
  {
    title: "Boi o Poshak Bitoron",
    duration: "3 mash",
    location: "Kurigram",
    beneficiary: "150 students",
    expense: "৳2,50,000",
    status: "Completed",
  },
  {
    title: "Ashroy Kendro Nirman",
    duration: "8 mash",
    location: "Chilmari",
    beneficiary: "120 families",
    expense: "৳10,50,000",
    status: "Ongoing",
  },
  {
    title: "Free Chokh Poriksha Camp",
    duration: "2 mash",
    location: "Mymensingh",
    beneficiary: "500 people",
    expense: "৳3,00,000",
    status: "Completed",
  },
];

const card =
  "rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900";

export default async function OverviewPage() {
  const max = Math.max(...monthly.map((m) => m.value));

  const res = await getAllDonations();
  const allData = res?.data ?? [];
  const donationsData = allData.filter((item) => item?.status === "verified");
  // মোট donation যোগ করা
  const totalCollections = donationsData.reduce(
    (sum: number, item: { amount?: number | string }) =>
      sum + (Number(item?.amount) || 0),
    0,
  );

  // বাংলাদেশি ফরম্যাটে (১,২৩,৪৫৬)
  const formattedTotal = `৳${totalCollections.toLocaleString("en-BD")}`;

  const stats = [
    {
      label: "Total Projects",
      value: "8",
      note: "▲ 3 this month",
      icon: "📁",
    },
    {
      label: "Beneficiaries",
      value: "3,420",
      note: "▲ 12% vs last month",
      icon: "🤝",
    },
    {
      label: "Total Donate",
      value: formattedTotal,
      note: `${donationsData.length} টি donation`,
      icon: "💝",
    },
    {
      label: "Total Expense",
      value: "৳00",
      note: "▲ ৳6.3L this month",
      icon: "💰",
    },
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Assalamu Alaikum, Admin</h1>
          <p className="text-gray-500">
            Here&apos;s what&apos;s happening across your projects today.
          </p>
        </div>
        <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
          + New Project
        </button>
      </div>

      {/* Stat cards */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={card}>
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-lg dark:bg-emerald-950">
              {s.icon}
            </div>
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs font-semibold text-emerald-600">{s.note}</p>
          </div>
        ))}
      </section>

      {/* Chart + categories */}
      <section className="grid gap-4 lg:grid-cols-3">
        <div className={`${card} lg:col-span-2`}>
          <h2 className="font-semibold">Monthly Expense</h2>
          <p className="mb-4 text-xs text-gray-500">
            Last 6 months (in Lakh Taka)
          </p>
          <div className="flex h-48 items-end justify-between gap-3">
            {monthly.map((m, i) => (
              <div
                key={m.month}
                className="flex flex-1 flex-col items-center gap-1"
              >
                <span className="text-xs font-semibold">{m.value}</span>
                <div
                  className={`w-full max-w-11 rounded-md ${
                    i === monthly.length - 1
                      ? "bg-emerald-600"
                      : "bg-emerald-100 dark:bg-emerald-900"
                  }`}
                  style={{ height: `${(m.value / max) * 140}px` }}
                />
                <span className="text-xs text-gray-500">{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={card}>
          <h2 className="font-semibold">Projects by Category</h2>
          <p className="mb-4 text-xs text-gray-500">Share of total projects</p>
          <div className="space-y-4">
            {categories.map((c) => (
              <div key={c.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{c.name}</span>
                  <b>{c.percent}%</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  <div
                    className={`h-full rounded-full ${c.color}`}
                    style={{ width: `${c.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent projects */}
      <section className={card}>
        <h2 className="font-semibold">Recent Projects</h2>
        <p className="mb-4 text-xs text-gray-500">
          Latest posts added by your team
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-xs text-gray-500">
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="px-2 py-2 font-semibold">Project</th>
                <th className="px-2 py-2 font-semibold">Location</th>
                <th className="px-2 py-2 font-semibold">Beneficiaries</th>
                <th className="px-2 py-2 font-semibold">Expense</th>
                <th className="px-2 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr
                  key={p.title}
                  className="border-b border-gray-100 last:border-0 dark:border-gray-800"
                >
                  <td className="px-2 py-3">
                    <p className="font-semibold">{p.title}</p>
                    <p className="text-xs text-gray-500">{p.duration}</p>
                  </td>
                  <td className="px-2 py-3">{p.location}</td>
                  <td className="px-2 py-3">{p.beneficiary}</td>
                  <td className="px-2 py-3">{p.expense}</td>
                  <td className="px-2 py-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        p.status === "Completed"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                          : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
