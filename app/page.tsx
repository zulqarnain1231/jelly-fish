import Navigation from "@/components/Shared/Navigation";
import { Fragment } from "react";
import Footer from "@/components/Shared/Footer";
import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import About from "@/components/Home/About/About";
import RoadMap from "@/components/Home/RoadMap/RoadMap";

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <RoadMap />
      <Footer />
    </Fragment>
  );
}
