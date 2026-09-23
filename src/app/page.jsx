// import Button from "../components/Button";
import Carousel from "../components/Carousel";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import TrendingHome from "../components/TrendingHome";

export default function Home() {
  return (
    <>
      {/* Top Logo & Sidebar Menu Section */}
      <LogoSection />

      {/* Bottom Navigation Bar */}
      <Navbar />

      {/* Page Content */}
      <main className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="md:flex-[1] bg-gray-100 rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">Left Section</h2>
            <p className="text-gray-700">
              Add your content here — maybe navigation, categories, or quick links.
            </p>
          </div>

          {/* Carousel (Center) */}
          <div className="md:flex-[2]">
            <Carousel />
          </div>

          {/* Right Section */}
          <div className="sm:flex-[1] bg-gray-100 rounded-lg p-4 shadow flex-wrap items-center justify-center">
            <h2 className="text-xl font-semibold mb-2">Right Section</h2>
            <p className="text-gray-700">
              Add your content here — maybe ads, featured posts, or announcements.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-400 mt-4"> 
        </div>
{/* <div className="divide-y divide-gray-300"> */}
<div>
  <TrendingHome />
</div>
       <div className="border-b border-gray-400 mt-4"> 
        </div>

      </main>
    </>
  );
}
