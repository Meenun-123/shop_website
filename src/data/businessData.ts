import galleryImages from '../galleryData.json';

export interface CollectionItem {
  id: string;
  number: string;
  categoryGroup: 'upvc' | 'wpc' | 'panels' | 'mesh';
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
    "Discover premium UPVC windows & doors, waterproof WPC frames, doors & boards, interior & exterior PVC/WPC wall panels, CNC Jali boards, and precision mesh solutions built to last.",
  phonePrimary: "+91 90004 57378",
  phonePrimaryRaw: "9000457378",
  phoneSecondary: "+91 83418 49597",
  phoneSecondaryRaw: "8341849597",
  whatsappNumber: "+91 90004 57378",
  whatsappLink:
    "https://wa.me/919000457378?text=Hello%20Vijaya%20Sai%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20UPVC%20windows%20%26%20doors%2C%20WPC%20frames%2C%20doors%2C%20boards%2C%20and%20wall%20panels.",
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
    id: "upvc-sliding-windows-doors",
    number: "01",
    categoryGroup: "upvc",
    title: "UPVC Sliding Windows & Doors",
    shortDesc: "Premium quality UPVC sliding systems available in 2 Track, 2.5 Track, and 3 Track configurations with smooth glide rollers.",
    fullDesc:
      "Engineered for modern homes and balconies, our premium UPVC sliding windows and doors deliver effortless glide operation, superior rain and dust sealing, and optional integrated mosquito mesh tracks in white or rich wood-grain laminates.",
    image: "./images/gallery/vse-photo-002.jpg",
    specs: [
      "Sliding Tracks: 2 Track, 2.5 Track & 3 Track",
      "Multi-Chamber Steel-Reinforced UPVC",
      "Integrated Mosquito Mesh Track Option",
      "White, Dark Walnut & Golden Oak Finishes",
    ],
    features: [
      "Up to 40dB acoustic noise reduction",
      "Weatherproof rain drainage channels",
      "UV-stabilized & zero-corrosion profiles",
    ],
  },
  {
    id: "upvc-openable-casement",
    number: "02",
    categoryGroup: "upvc",
    title: "UPVC Openable Casement Doors & Windows",
    shortDesc: "Precision openable single and double casement doors and windows with airtight multi-point locking.",
    fullDesc:
      "Designed for maximum ventilation, natural daylight, and airtight security. Our openable UPVC casement doors and windows feature heavy-duty hinges, EPDM double gasket sealing, and multi-point espagnolette locking systems.",
    image: "./images/gallery/vse-photo-004.jpg",
    specs: [
      "Openable Casement Doors & Windows",
      "Single, Double & French Door Configurations",
      "Heavy-Duty OBEN Handles & Multi-Point Locks",
      "Double / Single Toughened Safety Glass",
    ],
    features: [
      "Airtight thermal insulation lowers AC bills",
      "Full 90°–180° opening clearance",
      "Zero warping, swelling, or repainting required",
    ],
  },
  {
    id: "upvc-fixed-partitions-ventilators",
    number: "03",
    categoryGroup: "upvc",
    title: "UPVC Fixed Frames, Partitions, Ventilators & Louvers",
    shortDesc: "Architectural UPVC fixed frames, room & office partitions, bathroom exhaust ventilators, and glass louvers.",
    fullDesc:
      "Complete UPVC glazing solutions for stairwells, corridors, washrooms, and commercial cabins. Available as fixed view frames, sound-insulated partitions, exhaust-fan ventilators, and angled louvers for continuous airflow.",
    image: "./images/gallery/vse-photo-013.jpg",
    specs: [
      "Fixed Glass Frames & Architectural Partitions",
      "Exhaust-Ready Bathroom & Utility Ventilators",
      "Adjustable Glass & UPVC Louvers",
      "Clear, Frosted, Tinted & Reflective Glazing",
    ],
    features: [
      "Moisture & rust proof for wet areas",
      "Custom sizes fabricated to exact site openings",
      "Clean, minimal sightlines with high strength",
    ],
  },
  {
    id: "wpc-door-frames",
    number: "04",
    categoryGroup: "wpc",
    title: "WPC Door Frames (18mm to 32mm)",
    shortDesc: "100% waterproof, termite-proof solid WPC frames available in 3×2, 4×2, 4×2.5, 5×2.5, and 6×2.5 dimensions.",
    fullDesc:
      "Replace traditional timber frames with high-density solid Wood Polymer Composite (WPC) frames. Engineered for lifelong resistance against termites, moisture, rot, and seasonal expansion while delivering superior screw-holding strength.",
    image: "./images/gallery/vse-photo-059.jpg",
    specs: [
      "Frame Dimensions: 3×2, 4×2, 4×2.5, 5×2.5, 6×2.5",
      "WPC Range Thickness: 18mm to 32mm Available",
      "100% Waterproof & Termite-Proof Solid Core",
      "High Screw-Holding & Zero Bending",
    ],
    features: [
      "Ready to install with direct wall fixing",
      "Accepts paints, polish, veneers & laminates",
      "Ideal for main rooms, bedrooms & bathrooms",
    ],
  },
  {
    id: "wpc-designer-doors",
    number: "05",
    categoryGroup: "wpc",
    title: "WPC Designer Doors (26mm to 32mm)",
    shortDesc: "Precision-crafted WPC doors in 26mm to 32mm thickness, sizes up to 7 ft × 38 inches with CNC & designer finishes.",
    fullDesc:
      "Combining durability with luxury styling, our WPC doors come in 26mm to 32mm thickness and sizes up to 7 ft × 38 inches. Choose from CNC-routed grooves, digital decorative motifs, T-patti accents, and rich wood-grain finishes.",
    image: "./images/gallery/vse-photo-023.jpg",
    specs: [
      "Door Thickness: 26mm to 32mm",
      "Door Size: 7 ft × 38 inches (Custom Sizes Available)",
      "CNC Routed, Grooved & Designer Art Finishes",
      "100% Moisture, Termite & Borer Resistant",
    ],
    features: [
      "Never swells or jams during monsoon season",
      "Sound-dampening solid composite core",
      "Pairs seamlessly with matching WPC frames",
    ],
  },
  {
    id: "wpc-boards",
    number: "06",
    categoryGroup: "wpc",
    title: "WPC Boards (6mm to 18mm)",
    shortDesc: "High-density WPC boards from 6mm to 18mm thickness for modular kitchens, wardrobes, and architectural millwork.",
    fullDesc:
      "Versatile, eco-friendly Wood Polymer Composite boards ranging from 6mm to 18mm thickness. Ideal for humid kitchens, bathroom vanities, wardrobes, ceiling work, and precision CNC routing with smooth, uniform density.",
    image: "./images/gallery/vse-photo-110.jpg",
    specs: [
      "Board Thickness: 6mm to 18mm Available",
      "High-Density Lead-Free WPC Composite",
      "Waterproof, Fire-Retardant & Anti-Termite",
      "Smooth Surface for Laminate, Paint or CNC",
    ],
    features: [
      "Zero delamination in wet environments",
      "Clean edge machining without splintering",
      "Long-lasting alternative to plywood & MDF",
    ],
  },
  {
    id: "pvc-wpc-wall-panels",
    number: "07",
    categoryGroup: "panels",
    title: "Interior & Exterior PVC / WPC Wall Panels",
    shortDesc: "Architectural interior and exterior PVC & WPC fluted wall panels and louvers for contemporary living spaces.",
    fullDesc:
      "Elevate interior feature walls, TV units, ceilings, and exterior building elevations with our premium PVC and WPC fluted wall panels. Available in rich matte woods, charcoal tones, and UV-protected exterior grades.",
    image: "./images/gallery/vse-photo-060.jpg",
    specs: [
      "Interior & Exterior Grade PVC & WPC Panels",
      "Fluted Louvers, Charcoal & Wood Textures",
      "UV-Stabilized Weatherproof Exterior Options",
      "Concealed Interlocking Installation System",
    ],
    features: [
      "Quick, dust-free wall transformation",
      "Waterproof, washable & termite-free",
      "Adds acoustic warmth and architectural depth",
    ],
  },
  {
    id: "cnc-jali-boards",
    number: "08",
    categoryGroup: "panels",
    title: "CNC Jali Boards & Interior Solutions",
    shortDesc: "Precision CNC-cut WPC & PVC Jali boards, room dividers, pooja mandir screens, and custom modular wardrobes.",
    fullDesc:
      "Bespoke CNC Jali boards crafted from waterproof WPC and PVC sheets for interior partitions, pooja rooms, staircase screens, ceiling accents, and exterior elevation facades — alongside modern sliding wardrobes and vanity interiors.",
    image: "./images/gallery/vse-photo-057.jpg",
    specs: [
      "Precision CNC Routed WPC & PVC Jali Boards",
      "Interior Partitions & Exterior Facade Screens",
      "Custom Geometric, Floral & Traditional Motifs",
      "Matching Modular Wardrobes & Wall Cladding",
    ],
    features: [
      "Weatherproof for outdoor balconies & facades",
      "Crisp, burr-free precision CNC detailing",
      "Custom thickness from 6mm to 18mm WPC boards",
    ],
  },
  {
    id: "mesh-doors-hardware",
    number: "09",
    categoryGroup: "mesh",
    title: "Mosquito Mesh Doors, Safety Grills & Hardware",
    shortDesc: "Pleated, hinged & bi-fold mosquito mesh doors, integrated window grills, and OBEN UPVC architectural hardware.",
    fullDesc:
      "Complete protection and airflow for your home. We supply custom-fitted pleated, hinged, and bi-fold stainless steel mosquito mesh doors, integrated security grills, and genuine OBEN sliding & casement hardware.",
    image: "./images/gallery/vse-photo-125.jpg",
    specs: [
      "Hinged, Bi-Fold & Sliding Mosquito Mesh Doors",
      "Heavy-Duty Powder-Coated Frames & SS Mesh",
      "Genuine OBEN Casement & Sliding Hardware",
      "Custom-Fitted to Main Doors & Windows",
    ],
    features: [
      "Unobstructed airflow while keeping insects out",
      "Rust-resistant mesh & durable hinges",
      "Clean finish matching UPVC and WPC frames",
    ],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "project-1",
    title: "Walnut Finish UPVC Glazing Suite",
    category: "UPVC 2.5 & 3 Track Sliding & Casement",
    location: "Gudivada, Krishna District",
    description: "Complete dark walnut wood-finish UPVC sliding windows, openable casement units, and fixed lower glazing installed for maximum daylight and acoustic comfort.",
    image: "./images/gallery/vse-photo-003.jpg",
    specs: ["UPVC 2.5 & 3 Track", "Wood-Grain Laminate", "Acoustic Glazing"],
  },
  {
    id: "project-2",
    title: "Modern UPVC Casement & Partition Villa",
    category: "UPVC Openable Doors, Fixed Frames & Ventilators",
    location: "Vijayawada Outskirts",
    description: "Double openable white UPVC French casement doors paired with multi-chamber sliding balconies and exhaust ventilators.",
    image: "./images/gallery/vse-photo-004.jpg",
    specs: ["Openable Casement", "Multi-Point OBEN Locks", "Thermal Insulation"],
  },
  {
    id: "project-3",
    title: "WPC Designer Door & Solid Frame Residence",
    category: "WPC Frames (5×2.5) & 32mm Designer Doors",
    location: "Gudivada City Centre",
    description: "100% waterproof and termite-proof WPC door frames paired with 32mm CNC-routed and designer doors engineered for lifelong dimensional stability.",
    image: "./images/gallery/vse-photo-027.jpg",
    specs: ["WPC 32mm Door", "5×2.5 WPC Frame", "100% Waterproof"],
  },
  {
    id: "project-4",
    title: "Architectural Mesh Doors & PVC Wall Panels",
    category: "Bi-Fold Mesh Doors & Interior Fluted Panels",
    location: "Krishna District Residence",
    description: "Custom bi-fold and hinged mosquito mesh doors fitted seamlessly across entrances alongside fluted WPC/PVC interior wall paneling.",
    image: "./images/gallery/vse-photo-125.jpg",
    specs: ["Bi-Fold SS Mesh", "PVC/WPC Wall Panels", "CNC Jali Accents"],
  },
];

export const whyChooseUsData = [
  {
    number: "01",
    title: "Quality Craftsmanship",
    desc: "Every UPVC window, WPC frame, designer door, and wall panel is fabricated using lead-free profiles, high-density waterproof composites, and precision hardware.",
  },
  {
    number: "02",
    title: "Thoughtful Design",
    desc: "We balance modern architectural aesthetics with everyday performance — maximizing ventilation, acoustic calm, weatherproofing, and termite-free longevity.",
  },
  {
    number: "03",
    title: "Reliable Solutions",
    desc: "From exact site measurements in Gudivada and Krishna District to customized 2/2.5/3-track UPVC and 3×2 to 6×2.5 WPC frame sizing, we deliver accurate fits.",
  },
  {
    number: "04",
    title: "Customer Satisfaction",
    desc: "Direct guidance from proprietor Akuri Vaasu and our experienced team, ensuring transparent product selection, genuine OBEN fittings, and dependable after-sales support.",
  },
];

export const allGalleryPhotos = galleryImages;
