import Navbar from "../../components/Navbar";
import LogoSection from "../../components/LogoSection";

export default function politics() {
  return (
    <>
     <LogoSection />
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Opinions</h1>
      </div>
    </>
  );
}
