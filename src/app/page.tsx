import AnimatedHome from "@/components/AnimatedHome";
import { popularCities, properties } from "@/data/hotels";

export default function HomePage() {
  const featuredProperties = properties.filter((p) => p.rating >= 8.7).slice(0, 4);

  return (
    <AnimatedHome
      featuredProperties={featuredProperties}
      popularCities={popularCities}
    />
  );
}
