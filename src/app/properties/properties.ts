import Property from "../shared/models/property.model";
import locations from "./locations";
import {environment} from "../../env/environment";

const imagesDir = environment.assetsDir + '/images/';

const properties: Property[] = [
  {
    id: 1,
    name: 'Modern Urban Oasis',
    location: locations.at(2)!,
    description: 'Welcome to this sleek and stylish urban retreat! This contemporary one-bedroom apartment is located in the heart of the city, boasting floor-to-ceiling windows that provide stunning views of the skyline. The open-concept living space is adorned with chic furnishings and vibrant artwork. Guests can unwind on the private balcony or take a short stroll to trendy cafes and boutiques nearby.',
    photoUrls: [
      imagesDir + 'stock1.jpg'
    ],
    pricePerNight: 100,
    averageRating: 4.5
  },
  {
    id: 2,
    name: 'Cozy Bohemian Hideaway',
    location: locations.at(1)!,
    description: 'Escape to this charming bohemian-inspired apartment, tucked away in a quiet neighborhood. The warm and inviting atmosphere welcomes you with plush, eclectic furnishings and unique vintage decor. The kitchen is equipped for home-cooked meals, and the cozy bedroom promises a restful night\'s sleep. Step outside to a lush garden patio, perfect for morning coffee or evening cocktails under the stars.',
    photoUrls: [
      imagesDir + 'stock2.jpg'
    ],
    pricePerNight: 150,
    averageRating: 5.0
  },
  {
    id: 3,
    name: 'Seaside Serenity with Panoramic Views',
    location: locations.at(0)!,
    description: 'Experience coastal living at its finest in this two-bedroom beachfront apartment. The soothing sounds of waves crashing on the shore fill the air as you relax on the private terrace with panoramic ocean views. The interior exudes coastal charm with nautical decor and a fully equipped kitchen. Stroll down to the beach, just steps away, or explore the nearby seaside town\'s quaint shops and seafood restaurants.',
    photoUrls: [
      imagesDir + 'stock3.webp'
    ],
    pricePerNight: 170,
    averageRating: 4.5
  },
  {
    id: 4,
    name: 'Luxury Loft in the Sky',
    location: locations.at(2)!,
    description: 'Elevate your stay in this high-end loft perched on the top floors of a luxury skyscraper. Floor-to-ceiling windows offer breathtaking cityscape views, creating an unforgettable backdrop. The modern and minimalist design is complemented by high-end amenities, including a rooftop pool and fitness center. Indulge in the vibrant nightlife and upscale dining options within walking distance.',
    photoUrls: [
      imagesDir + 'stock4.jpg'
    ],
    pricePerNight: 100,
    averageRating: 4.5
  },
  {
    id: 5,
    name: 'Historic Elegance in the Heart of Old Town',
    location: locations.at(1)!,
    description: 'Immerse yourself in the charm of the past with a stay in this historic one-bedroom apartment located in the heart of the Old Town. Exposed brick walls, antique furnishings, and original architectural details transport you to a bygone era. The cobblestone streets outside lead to local markets, historic sites, and cozy cafes. Enjoy the perfect blend of old-world charm and modern comfort.',
    photoUrls: [
      imagesDir + 'stock5.jpg'
    ],
    pricePerNight: 150,
    averageRating: 5.0
  },
  {
    id: 6,
    name: 'Family-Friendly Haven with Park Views',
    location: locations.at(0)!,
    description: 'Ideal for families, this spacious three-bedroom apartment overlooks a lush city park, providing a tranquil escape in the midst of urban life. The kid-friendly design includes a playroom, and the fully equipped kitchen makes family meals a breeze. Explore the nearby playgrounds or take a short walk to family-friendly attractions. Convenience meets comfort in this welcoming home away from home.',
    photoUrls: [
      imagesDir + 'stock6.webp'
    ],
    pricePerNight: 170,
    averageRating: 4.5
  },
];

export default properties;
