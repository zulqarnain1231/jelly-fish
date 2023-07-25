import Navigation from "@/components/Shared/Navigation";
import { Fragment } from "react";
import Footer from "@/components/Shared/Footer";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Footer />
    </Fragment>
  );
}
