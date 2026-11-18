import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { Collections } from './components/Collections';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedProjects } from './components/FeaturedProjects';
import { VisualGallery } from './components/VisualGallery';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { LightboxModal, type GalleryPhoto } from './components/LightboxModal';
import { type CollectionItem, type ProjectItem, allGalleryPhotos } from './data/businessData';

export function App() {
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [filteredPhotoList, setFilteredPhotoList] = useState<GalleryPhoto[]>(
    allGalleryPhotos as GalleryPhoto[]
  );
  const [inquiryProduct, setInquiryProduct] = useState<string>('UPVC Sliding Windows & Doors (2 / 2.5 / 3 Track)');

  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = (productName?: string) => {
    if (productName) {
      setInquiryProduct(productName);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCollections = () => {
    const el = document.getElementById('collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhotoClick = (photo: GalleryPhoto, currentList: GalleryPhoto[]) => {
    setActivePhoto(photo);
    setFilteredPhotoList(currentList);
  };

  const handleProjectSelect = (project: ProjectItem) => {
    scrollToContact(project.title);
  };

  return (
    <div className="relative min-h-screen bg-[#F5F2EB] text-[#20201E] selection:bg-[#B7A17B] selection:text-white">
      {/* 1. Sophisticated Sticky Navbar */}
      <Navbar onContactClick={() => scrollToContact()} />

      {/* 2. Cinematic Hero Section */}
      <main>
        <Hero
          onExploreClick={scrollToCollections}
          onStoryClick={scrollToAbout}
        />

        {/* 3. Brand Story / Studio Introduction */}
        <BrandStory onLearnMoreClick={scrollToCollections} />

        {/* 4. Architectural Collections */}
        <Collections onSelectCollection={(item) => setSelectedCollection(item)} />

        {/* 5. Guiding Principles & Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Featured Architectural Projects */}
        <FeaturedProjects onSelectProject={handleProjectSelect} />

        {/* 7. Visual Workshop Gallery (All 149 Real Photographs) */}
        <VisualGallery onPhotoClick={handlePhotoClick} />

        {/* 8. Call to Action Banner */}
        <CTASection onContactClick={() => scrollToContact()} />

        {/* 9. Comprehensive Contact & Google Map Section */}
        <ContactSection
          ref={contactRef}
          initialProductInterest={inquiryProduct}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Quick Help */}
      <FloatingWhatsApp />

      {/* Modals */}
      {/* Product Detail Modal */}
      <ProductDetailModal
        item={selectedCollection}
        onClose={() => setSelectedCollection(null)}
        onEnquire={(product) => scrollToContact(product)}
      />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        currentPhoto={activePhoto}
        allPhotos={filteredPhotoList}
        onClose={() => setActivePhoto(null)}
        onSelectPhoto={(photo) => setActivePhoto(photo)}
      />
    </div>
  );
}

export default App;
