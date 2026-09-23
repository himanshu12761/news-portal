import Card from "./Card";

export default function TrendingNews() {
  return (
    <section className="flex flex-col gap-6 p-6">
      {/* Heading with animation */}
      <h2 className="text-3xl font-bold text-center mb-2 animate-bounce underline">
        Trending News
      </h2>

      {/* Main content (Left + Right Section) */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section with Carousel + Cards */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Carousel Section */}
          <div className="bg-gray-300 rounded-2xl w-full h-[420px] flex items-center justify-center">
            <p className="text-lg">Carousel A</p>
          </div>

          {/* L-shape Cards */}
          <div className="flex gap-6">
            {/* Horizontal Cards (2 cards) */}
            <div className="flex flex-col flex-1 gap-6">
              <div className="bg-gray-200 rounded-2xl h-[200px] flex items-center justify-center">
                Card 1
              </div>
              <div className="bg-gray-200 rounded-2xl h-[200px] flex items-center justify-center">
                Card 2
              </div>
            </div>

            {/* Vertical Cards (3 cards stacked) */}
            <div className="flex flex-col gap-6 w-[200px]">
              <div className="bg-gray-200 rounded-2xl h-[120px] flex items-center justify-center">
                Card B
              </div>
              <div className="bg-gray-200 rounded-2xl h-[120px] flex items-center justify-center">
                Card C
              </div>
              <div className="bg-gray-200 rounded-2xl h-[120px] flex items-center justify-center">
                Card D
              </div>
              <button className="bg-blue-600 text-white rounded-xl py-2 mt-2">
                See All
              </button>
            </div>
          </div>
        </div>
 <div className="border-t border-gray-300 my-4">

      </div>

        {/* Right Section (Responsive layout for Top Stories + Business/Recents) */}
        <div className="w-full lg:w-[300px] flex flex-col md:flex-row lg:flex-col gap-6">
          {/* Top Section */}
          <div className="flex-1 bg-gray-100 rounded-2xl p-4 flex flex-col">
            <h3 className="text-lg font-semibold text-center mb-4">Top Stories</h3>
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-gray-200 rounded-xl h-[100px] flex items-center justify-center">
                Item 1
              </div>
              <div className="bg-gray-200 rounded-xl h-[100px] flex items-center justify-center">
                Item 2
              </div>
              <div className="bg-gray-200 rounded-xl h-[100px] flex items-center justify-center">
                Item 3
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex-1 bg-gray-100 rounded-2xl p-4 flex flex-col">
            <h3 className="text-lg font-semibold text-center mb-4">Business/Recents</h3>
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-gray-200 rounded-xl h-[100px] flex items-center justify-center">
                Item 4
              </div>
              <div className="bg-gray-200 rounded-xl h-[100px] flex items-center justify-center">
                Item 5
              </div>
              <div className="bg-gray-200 rounded-xl h-[100px] flex items-center justify-center">
                Item 6
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
