import Hero from "@/components/Hero";
import PicsumGallery from "@/components/PicsumGallery";
import MemoryGallery from "@/components/MemoryGallery";
import LoveLetter from "@/components/LoveLetter";
import BirthdayCelebration from "@/components/BirthdayCelebration";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PicsumGallery />
      <MemoryGallery />
      <LoveLetter />
      <BirthdayCelebration />
    </div>
  );
};

export default Index;