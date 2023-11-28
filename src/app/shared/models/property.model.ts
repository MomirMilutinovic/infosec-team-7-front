import Location from "./location.model";

export default interface Property {
  id: number;
  name: string;
  location: Location;
  photoUrls: string[];
  description: string;
  pricePerNight: number;
  averageRating: number;
}
