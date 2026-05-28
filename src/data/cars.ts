export type Car = {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  priceGHS: number;
  mileage: string;
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  transmission: "Automatic" | "Manual";
  engine: string;
  condition: "Brand New" | "Foreign Used" | "Home Used";
  bodyType: string;
  color: string;
  description: string;
  features: string[];
  images: string[];
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const CARS: Car[] = [
  {
    id: "mercedes-s-class-2022",
    name: "Mercedes-Benz S 580 4MATIC",
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2022,
    priceGHS: 1450000,
    mileage: "18,400 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "4.0L V8 Biturbo",
    condition: "Foreign Used",
    bodyType: "Sedan",
    color: "Obsidian Black",
    description:
      "A flagship statement of automotive refinement. The S 580 blends handcrafted Nappa leather, MBUX Hyperscreen, and rear-axle steering into a sanctuary of effortless power. Imported and meticulously inspected for the Ghanaian market.",
    features: [
      "Burmester 4D Surround Sound",
      "Executive Rear Seats",
      "MBUX Hyperscreen",
      "Panoramic Sunroof",
      "Head-Up Display",
      "360° Camera",
      "Massage & Ventilated Seats",
    ],
    images: [
      u("photo-1618843479313-40f8afb4b4d8"),
      u("photo-1605559424843-9e4c228bf1c2"),
      u("photo-1606664515524-ed2f786a0bd6"),
    ],
  },
  {
    id: "range-rover-autobiography-2023",
    name: "Range Rover Autobiography",
    brand: "Range Rover",
    model: "Autobiography",
    year: 2023,
    priceGHS: 1980000,
    mileage: "9,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "4.4L V8 Twin-Turbo",
    condition: "Brand New",
    bodyType: "SUV",
    color: "Santorini Black",
    description:
      "The new Range Rover Autobiography redefines modern luxury — sculpted minimalism, unmatched presence and serene off-road capability. Delivered with full manufacturer warranty.",
    features: [
      "Meridian Signature Sound",
      "Executive Class Rear Seats",
      "Cabin Air Purification Pro",
      "Active Noise Cancellation",
      "Power Deployable Towbar",
      "Soft Door Close",
    ],
    images: [
      u("photo-1606664515524-ed2f786a0bd6"),
      u("photo-1612825173281-9a193378527e"),
      u("photo-1519440022993-04fae7eed397"),
    ],
  },
  {
    id: "bmw-x7-2022",
    name: "BMW X7 xDrive40i M Sport",
    brand: "BMW",
    model: "X7",
    year: 2022,
    priceGHS: 980000,
    mileage: "22,800 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "3.0L Inline-6 Turbo",
    condition: "Foreign Used",
    bodyType: "SUV",
    color: "Mineral White",
    description:
      "Commanding presence with 7-seat opulence. The X7 M Sport pairs Bavarian engineering with cinematic comfort — perfect for executive transport across Accra and beyond.",
    features: [
      "Sky Lounge Panoramic Roof",
      "Harman Kardon Surround",
      "Laserlight Headlamps",
      "Heated & Cooled Cup Holders",
      "Gesture Control",
      "Driving Assistant Professional",
    ],
    images: [
      u("photo-1555215695-3004980ad54e"),
      u("photo-1617531653332-bd46c24f2068"),
      u("photo-1556189250-72ba954cfc2b"),
    ],
  },
  {
    id: "lexus-lx600-2023",
    name: "Lexus LX 600 VIP",
    brand: "Lexus",
    model: "LX 600",
    year: 2023,
    priceGHS: 1620000,
    mileage: "11,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "3.5L V6 Twin-Turbo",
    condition: "Brand New",
    bodyType: "SUV",
    color: "Sonic Quartz",
    description:
      "The pinnacle of Lexus craftsmanship. The LX 600 VIP delivers four-seat first-class lounging with semi-aniline leather, ottomans, and a 25-speaker Mark Levinson reference system.",
    features: [
      "Mark Levinson 25-Speaker Audio",
      "Rear Ottoman Seats",
      "Crawl Control & Multi-Terrain Select",
      "Heads-Up Display",
      "Power Side Steps",
      "Four-Zone Climate",
    ],
    images: [
      u("photo-1606664515524-ed2f786a0bd6"),
      u("photo-1604555138307-86d9dfaee14d"),
      u("photo-1494976388531-d1058494cdd8"),
    ],
  },
  {
    id: "audi-q8-2022",
    name: "Audi Q8 55 TFSI Quattro",
    brand: "Audi",
    model: "Q8",
    year: 2022,
    priceGHS: 870000,
    mileage: "26,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "3.0L V6 TFSI",
    condition: "Foreign Used",
    bodyType: "Coupe SUV",
    color: "Daytona Grey",
    description:
      "Coupe silhouette meets SUV authority. Quattro all-wheel drive, Virtual Cockpit Plus and a sculpted cabin make the Q8 a benchmark in modern luxury design.",
    features: [
      "Bang & Olufsen 3D Sound",
      "Virtual Cockpit Plus",
      "Matrix LED Headlamps",
      "Air Suspension",
      "Panoramic Glass Roof",
      "Adaptive Cruise Assist",
    ],
    images: [
      u("photo-1606152421802-db97b9c7a11b"),
      u("photo-1612544409025-e3d4f9d36f53"),
      u("photo-1503376780353-7e6692767b70"),
    ],
  },
  {
    id: "toyota-land-cruiser-300-2023",
    name: "Toyota Land Cruiser 300 ZX",
    brand: "Toyota",
    model: "Land Cruiser 300",
    year: 2023,
    priceGHS: 1180000,
    mileage: "7,600 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "3.5L V6 Twin-Turbo",
    condition: "Brand New",
    bodyType: "SUV",
    color: "Precious White Pearl",
    description:
      "The icon, reborn. The 300 ZX delivers legendary reliability with first-class refinement — a true forever vehicle built for African roads.",
    features: [
      "Multi-Terrain Monitor",
      "Cool Box Console",
      "JBL Premium Audio",
      "Ventilated Massage Seats",
      "Crawl Control",
      "Toyota Safety Sense 3.0",
    ],
    images: [
      u("photo-1533473359331-0135ef1b58bf"),
      u("photo-1519440022993-04fae7eed397"),
      u("photo-1494976388531-d1058494cdd8"),
    ],
  },
];

export const getCar = (id: string) => CARS.find((c) => c.id === id);
export const formatGHS = (n: number) =>
  new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    maximumFractionDigits: 0,
  }).format(n);
