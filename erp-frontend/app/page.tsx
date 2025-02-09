import HeroSection from "@/components/HeroSection/HeroSection";
import MissionVisionSection from "@/components/MissionVisionSection/MissionVisionSection";
import ValuesSection from "@/components/ValuesSection/ValuesSection";
import CompanySection from "@/components/CompanySection/CompanySection";
import ClientsCarousel from "@/components/ClientsCarousel/ClientsCarousel";
import OurServices from "@/app/_components/OurServices/OurServices";
import CivilWorks from "@/components/CivilWorks/CivilWorks";

export default function HomePage() {
  return (
    <>
      {/* Hero Section -Carousel */}
      <HeroSection />

      {/* Sección - Nuestra Empresa */}
      <CompanySection />

      {/* Seccion Mision -Visión */}
      <MissionVisionSection />

      {/* Seccion de nuetros valores */}
      <ValuesSection />

      {/* Seccion de nuestros clientes*/}
      <ClientsCarousel />

      {/*Sección de nuestros productos*/}
      <OurServices />

      {/*Seccion de bras*/}
      <CivilWorks />
    </>
  );
}
