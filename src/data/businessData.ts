import galleryImages from '../galleryData.json';

export interface CollectionItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  specs: string[];
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  specs: string[];
}

export const businessInfo = {
  name: "Vijaya Sai Enterprises",
  legalName: "Vijaya Sai Enterprises",
  proprietor: "Akuri Vaasu",
  role: "Proprietor & Principal Consultant",
  headline: "Spaces Deserve Something Extraordinary.",
  subheadline:
    "Discover thoughtfully crafted doors, windows, precision architectural grills and interior solutions that bring elegance, functionality and character to every space.",
  phonePrimary: "+91 90004 57378",
  phonePrimaryRaw: "9000457378",
  phoneSecondary: "+91 83418 49597",
  phoneSecondaryRaw: "8341849597",
  whatsappNumber: "+91 90004 57378",
  whatsappLink:
    "https://wa.me/919000457378?text=Hello%20Vijaya%20Sai%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20doors%2C%20windows%2C%20and%20architectural%20grills.",
  email: "vijayasaienterprises.gdv@gmail.com",
  address: {
    landmark: "Opp : Old Muncipal Office, Beside Zandu Street",
    city: "GUDIVADA",
    pincode: "521 301",
    district: "Krishna Dist.",
    state: "Andhra Pradesh",
    country: "India",
    full: "Opp : Old Muncipal Office, Beside Zandu Street, GUDIVADA - 521 301. Krishna Dist., A.P.",
  },
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:30 PM",
    sunday: "Sunday: By Appointment",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15307.754897984852!2d80.9859265871582!3d16.435777700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36053359d9a04f%3A0xe54e19572b8c9d2f!2sGudivada%2C%20Andhra%20Pradesh%20521301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const collectionsData: CollectionItem[] = [
  {
    id: "premium-main-doors",
    number: "01",
    title: "Premium Main Doors",
    shortDesc: "Grand architectural entrance doors crafted from seasoned teak wood, modern pivot systems, and security cores.",
    fullDesc:
      "Your entrance makes the definitive statement of your home. Our main doors combine robust security engineering with sculptural woodworking, available in solid teak, contemporary pivot designs, and brass/copper metal accents.",
    image: "./images/gallery/vse-photo-001.jpg",
    specs: ["Burma & Teak Wood", "Heavy Pivot & Ball-bearing Hinges", "Multi-point Security Locks", "Custom Carvings & Flush Panels"],
    features: ["Weather-sealed acoustic gaskets", "Termite & moisture treated", "Custom oversized architectural heights"],
  },
  {
    id: "designer-wooden-doors",
    number: "02",
    title: "Designer Wooden Doors",
    shortDesc: "Timeless natural wood grains, contemporary groove patterns, and sculpted solid timber construction.",
    fullDesc:
      "Crafted from premium kiln-dried hardwoods with hand-finished stains. Featuring minimalist horizontal grooves, geometric veneers, and classic raised paneling tailored to modern luxury residences.",
    image: "./images/gallery/vse-photo-004.jpg",
    specs: ["Selected Hardwoods & Veneers", "Low-VOC Polyurethane Finish", "Sound Transmission Class (STC) 34+", "Concealed Magnetic Latches"],
    features: ["Natural grain alignment", "Warp-resistant laminated core", "Choice of matte, satin, or gloss lacquer"],
  },
  {
    id: "modern-interior-doors",
    number: "03",
    title: "Modern Interior Doors",
    shortDesc: "Sleek flush doors, minimalist acoustic bedroom doors, and textured contemporary finishes.",
    fullDesc:
      "Seamlessly integrating into contemporary interior walls. Designed with acoustic hollow or tubular cores, precision rebated edges, and soft-closing concealed mechanisms.",
    image: "./images/gallery/vse-photo-009.jpg",
    specs: ["Engineered Solid Core", "Frameless Flush / Architrave options", "Scratch-resistant laminate/veneer", "Concealed 3D Adjustable Hinges"],
    features: ["Acoustic dampening", "Lightweight yet structural integrity", "Minimalist European handle suites"],
  },
  {
    id: "aluminium-windows",
    number: "04",
    title: "Aluminium Windows",
    shortDesc: "Ultra-slim architectural sightlines, thermal break efficiency, and panoramic floor-to-ceiling glass.",
    fullDesc:
      "Engineered with aerospace-grade aluminium extrusions and durable powder-coat or anodized finishes. Maximizes natural light while keeping out heat, wind, and monsoon rain.",
    image: "./images/gallery/vse-photo-003.jpg",
    specs: ["Thermal Break Aluminium 6063-T6", "Double / Triple DGU Glass", "EPDM Triple Gasket Seal", "Wind Load Certified up to 2.5 kPa"],
    features: ["Ultra-slim frame profiles", "Anodized champagne & charcoal finishes", "Smooth whisper-glide rollers"],
  },
  {
    id: "upvc-windows",
    number: "05",
    title: "UPVC Windows",
    shortDesc: "High-performance energy-saving UPVC casement, tilt-and-turn, and fixed glazing solutions.",
    fullDesc:
      "Engineered multi-chamber UPVC profiles with steel reinforcement. Delivers unmatched noise reduction up to 40dB, zero corrosion in coastal and humid climates, and thermal insulation that lowers cooling bills.",
    image: "./images/gallery/vse-photo-008.jpg",
    specs: ["Multi-chamber Lead-Free UPVC", "Galvanized Steel Reinforcements", "Acoustic Laminated Glass", "Multi-point Espagnolette Locks"],
    features: ["Maintenance-free UV stabilized", "Weatherproof rain channels", "Integrated mosquito wire mesh option"],
  },
  {
    id: "sliding-windows",
    number: "06",
    title: "Sliding Windows & Balcony Systems",
    shortDesc: "Effortless heavy-duty 2-track and 3-track sliding systems with integrated stainless steel mesh.",
    fullDesc:
      "Ideal for expansive living room vistas and bedroom balconies. Featuring heavy-duty stainless steel tracks, precision nylon bearing rollers, and concealed multi-lock handles.",
    image: "./images/gallery/vse-photo-013.jpg",
    specs: ["2-Track, 3-Track & 4-Track Configurations", "SS 304 Heavy-duty Rollers", "Toughened Safety Glass (6mm - 12mm)", "Interlocking Weather Brushes"],
    features: ["Integrated flyscreen/mesh track", "High water-tightness threshold", "Smooth fingertip glide operation"],
  },
  {
    id: "architectural-grills",
    number: "07",
    title: "Architectural Safety Grills",
    shortDesc: "Precision laser-cut patterns, wrought iron accents, and high-tensile security grills that complement modern facades.",
    fullDesc:
      "Security meets sculptural architecture. Designed with CNC laser precision cutting, stainless steel, and powder-coated wrought iron to safeguard your home without sacrificing ventilation or aesthetics.",
    image: "./images/gallery/vse-photo-002.jpg",
    specs: ["SS 304 / SS 316 / Mild Steel", "CNC Laser Cut Geometrics & Floral Motifs", "Zinc Epoxy Undercoat + Electrostatic Powder Coat", "Tamper-proof Wall Anchors"],
    features: ["Rust & corrosion resistant", "Custom pattern scalability", "Seamless integration with window & door frames"],
  },
  {
    id: "door-frames-accessories",
    number: "08",
    title: "Door Frames & Hardware",
    shortDesc: "Seasoned solid wood frames, heavy UPVC/aluminium sub-frames, and premium architectural hardware.",
    fullDesc:
      "A superior door requires an immaculate frame. We manufacture precision jambs, architraves, and provide luxury hardware suites including solid brass pulls, digital mortise locks, and magnetic door stoppers.",
    image: "./images/gallery/vse-photo-005.jpg",
    specs: ["Teak & Sal Wood / Heavy UPVC Jambs", "Solid Brass, Matt Black & Champagne Gold Finishes", "Heavy Duty Hydraulic Concealed Closers", "Smart Digital & Biometric Locks"],
    features: ["Precision mitered corners", "Rubber acoustic rebate seals", "Long-term dimensional stability"],
  },
  {
    id: "interior-solutions",
    number: "09",
    title: "Interior Solutions & Partitions",
    shortDesc: "Acoustic glass office partitions, decorative fluted paneling, and custom architectural room dividers.",
    fullDesc:
      "Transform interior spaces with tailored glass partitions, slim aluminium room dividers, and fluted architectural timber panels that divide rooms while preserving openness and natural illumination.",
    image: "./images/gallery/vse-photo-010.jpg",
    specs: ["Slimline Aluminium Grid Partitions", "Fluted / Frosted / Tinted Glass", "Architectural Wood Wall Paneling", "Sliding Pocket Glass Dividers"],
    features: ["Modular flexible installation", "High acoustic privacy", "Sophisticated minimalist ambiance"],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "project-1",
    title: "Grand Teak Residence",
    category: "Main Entrance & Safety Grills",
    location: "Gudivada, Krishna District",
    description: "Custom oversized 8.5-foot Burma teak pivot door paired with an integrated geometric laser-cut safety enclosure.",
    image: "./images/gallery/vse-photo-006.jpg",
    specs: ["Burma Teak", "CNC Laser Cut SS 304", "Heavy Pivot Hardware"],
  },
  {
    id: "project-2",
    title: "The Glass Villa",
    category: "Aluminium Glazing & Windows",
    location: "Vijayawada Outskirts",
    description: "Floor-to-ceiling slimline sliding window systems with heat-reflective solar glass and acoustic dampening.",
    image: "./images/gallery/vse-photo-011.jpg",
    specs: ["6063-T6 Aluminium", "DGU Acoustic Glass", "3-Track Sliding with Mesh"],
  },
  {
    id: "project-3",
    title: "Contemporary Urban Penthouse",
    category: "Interior Flush Doors & Frames",
    location: "Gudivada City Centre",
    description: "Minimalist handleless flush wooden doors with concealed magnetic latches and custom textured natural veneers.",
    image: "./images/gallery/vse-photo-016.jpg",
    specs: ["Engineered Solid Core", "Concealed 3D Hinges", "Matt Polyurethane Finish"],
  },
  {
    id: "project-4",
    title: "Serene Garden Courtyard",
    category: "UPVC Casement & Balcony Grills",
    location: "Machilipatnam Highway",
    description: "Multi-chamber UPVC French doors and weatherproof architectural safety grills overlooking landscaped courtyards.",
    image: "./images/gallery/vse-photo-021.jpg",
    specs: ["Multi-chamber UPVC", "Toughened 8mm Glass", "Anti-Corrosion Powder Coating"],
  },
];

export const whyChooseUsData = [
  {
    number: "01",
    title: "Quality Craftsmanship",
    desc: "Every door, window frame, and safety grill is fabricated using seasoned woods, certified metal extrusions, and rigorous attention to joints, tolerances, and surface finishing.",
  },
  {
    number: "02",
    title: "Thoughtful Design",
    desc: "We balance timeless architectural aesthetics with effortless functionality — maximizing daylight, ventilation, ease of operation, and long-term durability.",
  },
  {
    number: "03",
    title: "Reliable Solutions",
    desc: "From precise on-site measurements in Gudivada and surrounding regions to tailored engineering advice, we ensure hassle-free execution without compromise.",
  },
  {
    number: "04",
    title: "Customer Satisfaction",
    desc: "Direct guidance from proprietor Akuri Vaasu and our experienced fabrication team, ensuring transparent communication, custom sizing, and dependable after-sales care.",
  },
];

export const allGalleryPhotos = galleryImages;
