import { Banner } from "@/components/layout/Banner";
import { CTA } from "@/components/layout/CTA";
import { Feature } from "@/components/layout/Feature";
import { Hero } from "@/components/layout/Hero";
import { Logos } from "@/components/layout/Logos";
import { Testimonial } from "@/components/layout/Testimonials";

function Page() {
  return (
    <div>
      {/* <Banner /> */}
      <Hero />
      <Feature />
      <Testimonial />
      <Logos />
      <CTA />
    </div>
  );
};

export default Page;