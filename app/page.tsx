import Navigation from "@/components/Shared/Navigation";
import { Fragment } from "react";
import Footer from "@/components/Shared/Footer/Footer";
import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import About from "@/components/Home/About/About";
import RoadMap from "@/components/Home/RoadMap/RoadMap";
import OurMission from "@/components/Home/OurMission";
import FrequentlyAskedQuestions from "@/components/Home/Faqs/FrequentlyAskedQuestions";
import Tokenomics from "@/components/Home/Tokenomics/Tokenomics";
import OurTeam from "@/components/Home/OurTeam/OurTeam";
import NewsLetter from "@/components/Home/NewsLetter/NewsLetter";
import JellyFishToken from "@/components/Home/JellyFishToken";
import FeaturedOn from "@/components/Home/FeaturedOn";

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Services />
      <OurMission />
      <JellyFishToken />
      <Tokenomics />
      <About />
      <RoadMap />
      <FrequentlyAskedQuestions />
      <OurTeam />
      <NewsLetter />
      <FeaturedOn />
      <Footer />
    </Fragment>
  );
}
