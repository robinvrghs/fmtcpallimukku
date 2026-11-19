import AboutSection from "../components/public/home/AboutSection";
import AdmissionsCTA from "../components/public/home/AdmissionsCTA";
import CampusLifeSection from "../components/public/home/CampusLifeSection";
import ContactSection from "../components/public/home/ContactSection";
import FounderMessage from "../components/public/home/FounderMessage";
import Hero from "../components/public/home/hero";
import Highlights from "../components/public/home/Highlights";
import NewsEventsSection from "../components/public/home/NewsEventsSection";
import ProgrammesSection from "../components/public/home/ProgrammesSection";
import WhyChooseSection from "../components/public/home/WhyChooseSection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <AboutSection />
      <FounderMessage />
      <ProgrammesSection />
      <WhyChooseSection />
      <CampusLifeSection />
      <NewsEventsSection />
      <AdmissionsCTA />
      <ContactSection />
    </>
  );
}