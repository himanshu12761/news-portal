import Navbar from "../../components/Navbar";
import LogoSection from "../../components/LogoSection";

export default function Podcast() {
  return (
    <>
      <LogoSection />
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold"> Podcast Section</h1>
      </div>
    </>
  );
}
