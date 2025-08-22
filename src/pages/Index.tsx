import Hero from "@/components/Hero";
import MemoryGallery from "@/components/MemoryGallery";
import LoveLetter from "@/components/LoveLetter";
import BirthdayCelebration from "@/components/BirthdayCelebration";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MemoryGallery />
      <LoveLetter />
      <BirthdayCelebration />
    </div>
  );
};

export default Index;
