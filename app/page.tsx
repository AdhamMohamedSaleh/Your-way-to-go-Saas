import { Banner } from "@/components/layout/Banner";
import { Feature } from "@/components/layout/Feature";
import { Hero } from "@/components/layout/Hero";
import { Testimonial } from "@/components/layout/Testimonials";

function Page() {
  return (
    <div>
      {/* <Banner /> */}
      <Hero />
      <Feature />
      <Testimonial />
    </div>
  );
};

export default Page;