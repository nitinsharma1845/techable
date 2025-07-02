import {
  Header,
  HeroSection,
  AfterHeroSection,
  Works,
  Footer,
  SectionContent,
  // ConsultationCard
} from "../components";

const Home = () => {
  return (
    <>
      <HeroSection className="h-screen">
        <Header />
        <SectionContent />
      </HeroSection>
      <AfterHeroSection />
      <Works />
      {/* <ConsultationCard  /> */}
      <Footer />
    </>
  );
};

export default Home;
