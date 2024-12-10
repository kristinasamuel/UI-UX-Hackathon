// home / hero section
import { Button } from "@/components/ui/button";
export default function HeroSection() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center sm:bg-cover md:bg-cover overflow-hidden lg:bg-center"
      style={{ backgroundImage: "url('/images/heroImage.png')" }}>
      {/* detail of the products */}
      <div className="w-full h-auto sm:w-full sm:h-auto md:w-[643px] md:h-[443px]  lg:md-[643px] lg:h-[443px] rounded-[10px] bg-[#FFF3E3]  p-4 items-center sm:items-center md:items-start lg:items-start ml-0 lg:ml-[600px]  top-[253px] ">
        <div className=" flex flex-col p-4 lg:p-10">
          <h3 className="font-Poppins font-semibold text-[16px] text-[#333333]">
            New Arrival
          </h3>
          <h4 className=" font-bold text-[32px] sm:text-[32px] md:text-[32px] lg:text-[52px] w-full lg:w-[400px] items-center text-[#B88E2F]">
            Discover Our New Collection
          </h4>
          <p className="font-Poppins font-medium text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] text-[#333333] w-full lg:w-[530px] h-[52px] mt-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button className="w-full sm:w-full md:w-full lg:w-[222px] lg:h-[74px] h-full p-0 lg:p-[25px] bg-[#B88E2F] hover:bg-[#dab561] font-Poppins font-bold text-[14px] sm:text-[14px] lg:text-[16px] text-[#FFFFFF] mt-10">
            BUY Now
          </Button>
        </div>
      </div>
    </section>
  );
}
