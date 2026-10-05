import Sidebar from "./components/sideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 md:flex-row md:overflow-hidden">
      <Sidebar />
      <main className="min-w-0 flex-1 overflow-y-auto p-4 md:p-7">
        {children}
      </main>
    </div>
  );
}
