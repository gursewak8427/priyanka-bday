import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";

const images = [
  { src: img1, alt: "Photo 1" },
  { src: img2, alt: "Photo 2" },
  { src: img3, alt: "Photo 3" },
  { src: img4, alt: "Photo 4" },
  { src: img5, alt: "Photo 5" },
  { src: img6, alt: "Photo 6" },
];

const PicsumGallery = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="w-full h-auto rounded-lg shadow-soft"
            loading="lazy"
            style={{
              // On mobile, show actual height and 100% width
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PicsumGallery;