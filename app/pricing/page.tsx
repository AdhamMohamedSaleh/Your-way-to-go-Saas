import { FAQ } from "@/components/layout/FAQ";
import Plans from "@/components/layout/Plans";

export const metadata = {
  title: "Pricing",
}

function Page() {
  return (
    <div>
      <Plans />
      <FAQ />
    </div>
  );
};

export default Page;