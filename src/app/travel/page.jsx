import Navbar from "../../components/Navbar";
import LogoSection from "../../components/LogoSection";

export default function Travel() {
  return (
    <>
      <LogoSection />
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Travel</h1>
      </div>
    </>
  );
}
