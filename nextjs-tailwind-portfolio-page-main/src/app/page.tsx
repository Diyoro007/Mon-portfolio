// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
// import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";

import ContactForm from "./contact-form";
import Reseaux from "./reseaux";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Reseaux /> */}
      <Skills />
      <Projects />
      <Resume />
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
