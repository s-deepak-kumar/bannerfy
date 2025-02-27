import Hero from "@/components/Hero";
// import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { Testimonials } from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <div className="absolute left-0 top-0 bottom-0  w-full h-full">
        <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px] "></div>
      </div>
      <Hero />
      <Logos />

      <div className="relative w-full text-white -mt-8 py-20">
        <div className="absolute inset-0 bg-[#350450] clip-custom -z-10"></div>
        <Section id="features" title="Features" sectionClassName="!lg:py-32">
          <Benefits />
        </Section>
      </div>

      <Section id="testimonials" title="What Our Users Say">
        <Testimonials />
      </Section>

      <Section id="pricing" title="Pricing">
        <Pricing />
      </Section>

      <div className="relative">
        <Section id="faqs" title="Your Questions, Our Answers">
          <FAQ />
        </Section>
      </div>

      <Container>
        {/* <Stats /> */}
        <Newsletter />

        {/* <CTA /> */}
      </Container>

      <Footer />
    </div>
  );
};

export default HomePage;
