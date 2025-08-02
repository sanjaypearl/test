import PartnerProgram from "@/components/Partner/PartnerProgram";
import PartnerTestimonials from "@/components/Partner/PartnerTestimonials";
import PartnerWithUs from "@/components/Partner/PartnerWithUs";
import Security from "@/components/HomeComponents/Security";
import SlidingLogo from "@/components/HomeComponents/SlidingLogo";
import PartnerBanner from "@/components/Partner/PartnerBanner";

const page = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="">
        <PartnerBanner />
        {/* <PartnerWithUs /> */}
        <SlidingLogo />
        <PartnerProgram />
        <PartnerTestimonials />
        <Security />
      </div>
    </div>
  );
};

export default page;
