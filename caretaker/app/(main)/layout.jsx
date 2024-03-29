import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

export default function MainLayout({ children }) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:insert-y-0 bg-gray-900">
        <Sidebar />
      </div>
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
