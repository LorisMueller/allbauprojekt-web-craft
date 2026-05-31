import Navigation from "@/components/Navigation";
import { useEffect, useMemo, useState } from "react";

const IMAGE_FILES = [
  "55d6da9f-4f41-4293-bb15-04109723c2f9.JPG",
  "b20cee2c-ebc7-4a95-a4ef-161952ac73fa.JPG",
  "bb143c67-0709-457e-b7f9-6b1c16d27c14.JPG",
  "e69f67cc-b77f-4cdd-bc58-578a7b3c4a5b.JPG",
  "eebf31c7-fbee-4b9b-b50b-2a33f3134549.JPG",
  "3151ec97-2f57-45d2-9e15-883e60498e38.JPG",
  "2845f1b9-18d0-4601-80dc-5a6e075f90b8.JPG",
  "2f30527c-2cd8-4512-ba91-cb9d976f62c7.JPG",
  "295568d6-8d4f-4323-a006-6577a473e868.JPG",
  "52e2b585-b0cb-492e-a67a-669b776abc92.JPG",
  "2f6d096b-119c-4507-aad2-93e4469cafd5.JPG",
  "7bbe17d0-e24d-4f08-a594-96057db3a01d.JPG",
  "789644be-b518-4a21-a6c4-2a03b8f44447.JPG",
  "5dd9d029-f936-4b6e-962f-ffe1b251e20a.JPG",
  "99ab3f76-7b67-4bb8-bdd8-7506c3041af3.JPG",
  "9dc294c4-e100-4877-b5cd-3544ff3cbe65.JPG",
  "9da70245-f2e8-4356-a48b-a68f74fe05c9.JPG",
  "d2ccd38c-dc92-4dff-af7e-3a0173858836.JPG",
  "d7d05a75-712b-47c4-b5f1-fa36965e01c0.JPG",
  "f4a82981-5fd0-458e-9b89-43de365882aa.JPG",
  "9def28b7-fb83-4ed8-9e09-c31f318625dd.JPG",
  "7ac59c05-bb8b-4304-a795-5590d2e9abde.JPG",
  "95e355f7-1442-494a-b750-d3cfdb5ebac3.JPG",
  "1978e3d8-6cc2-4195-beba-5102abd6bcde.JPG",
  "3eaa7587-1175-4f4b-b806-aa178711b463.JPG",
  "46532bc2-86a6-4486-bf03-9cb97f06a914.JPG",
  "41da3947-b58f-45ca-87b0-371b8aa3df31.JPG",
  "336184bf-42b4-4647-9a75-225149c598df.JPG",
  "c4d90349-fa69-4746-864a-db3b4e68f40d.JPG",
  "d0c6f0ef-c0af-4b3e-9d60-b9ae70727940.JPG",
  "83e28112-201c-4c66-80c1-d5c7652a26cd.JPG",
  "0858dda8-487d-4b50-bac6-186598a5fa55.JPG",
  "0cb35846-16ef-4892-8189-80f51603eceb.JPG",
] as const;

const Portfolio = () => {
  const galleryItems = useMemo(
    () =>
      IMAGE_FILES.map((file) => ({
        full: `/pictures/Allbauprojekt-Bilder/${file}`,
        thumb: `/pictures/allbauprojekt-resized/${file.replace(".JPG", ".jpg")}`,
      })),
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length));
  const showNext = () => setActiveIndex((prev) => (prev === null ? null : (prev + 1) % galleryItems.length));

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Unser Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Entdecken Sie unsere abgeschlossenen Projekte und sehen Sie die handwerkliche Qualität, die Allbauprojekt auszeichnet
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Arbeit spricht für sich
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense auto-rows-[185px] md:auto-rows-[260px] gap-2 md:gap-3">
            {galleryItems.map((image, index) => (
              <button
                key={image.full}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-md shadow-card hover:shadow-professional transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                  index % 7 === 0 ? "md:col-span-2 md:row-span-2" : index % 5 === 0 ? "md:col-span-2" : ""
                }`}
                aria-label={`Bild ${index + 1} in voller Größe anzeigen`}
              >
                <img
                  src={image.thumb}
                  srcSet={`${image.thumb} 1x, ${image.full} 2x`}
                  alt={`Allbauprojekt Referenz ${index + 1}`}
                  loading={index < 8 ? "eager" : "lazy"}
                  fetchPriority={index < 4 ? "high" : "auto"}
                  decoding="async"
                  className="h-full w-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-black/0 to-black/0 opacity-30 group-hover:opacity-45 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="bg-construction-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Qualität & Individuelle Wünsche
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Einzigartige Qualität und individuelle Wünsche sind Teil unserer Überzeugung und werden von unserem Unternehmen vertreten. 
            Jedes Projekt ist so individuell und vielfältig wie die Menschen, mit denen wir arbeiten.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Abgeschlossene Projekte</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <p className="text-muted-foreground">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 md:right-8 md:top-8 text-white/90 hover:text-white text-4xl leading-none"
            aria-label="Lightbox schließen"
          >
            ×
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-4xl"
            aria-label="Vorheriges Bild"
          >
            ‹
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-4xl"
            aria-label="Nächstes Bild"
          >
            ›
          </button>

          <div className="h-full w-full flex items-center justify-center">
            <img
              src={galleryItems[activeIndex].full}
              alt={`Allbauprojekt Referenz ${activeIndex + 1}`}
              className="max-h-[86vh] w-auto max-w-[92vw] rounded-xl shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-sm">
            {activeIndex + 1} / {galleryItems.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
