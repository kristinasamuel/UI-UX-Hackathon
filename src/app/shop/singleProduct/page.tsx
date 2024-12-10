// Home / Shop / single product
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
export default function NewProductsSection() {
  return (
    <div className="flex flex-col bg-[] w-full min-h-screen overflow-hidden">
      <div className="flex items-center   w-full bg-[#F9F1E7] h-[100px] space-x-4 ">
        {/* left content Detail, logo */}
         
          <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F] ml-[99px]">
          Home
          </p>
          <IoIosArrowForward className="" />
          <p className="font-Poppins font-normal text-[16px] text-[#9F9F9F]">
          Shop
          </p>
          <IoIosArrowForward className="" />

          <Image
            src={"/images/line 5.png"}
            alt="logo"
            height={20}
            width={1}
            className="w-[1px] h-auto border-2  border-solid border-[#9F9F9F]"
          />
          <p className="font-Poppins font-normal text-[16px] text-[#000000]">
          Asgaard sofa
          </p>
        </div>
        <div className="flex items-start justify-center w-full  ">
            <div className="flex flex-row items-start w-[1241.01px] h-[730] ml-[99px]">
               <div className="flex flex-col h-[416px] w-[76px] ">
                <div className="w-[76] h-[80] bg-[#D9D9D9] items-center"> 
               <Image
               src={"/images/sofa 2.png"}
               alt="k"
               width={76}
               height={80}

               />
               
               <div className="w-[76] h-[80] bg-[#D9D9D9] items-center"> 

               <Image
               src={"/images/sofa set3.png"}
               alt="k"
               width={76}
               height={80}

               />
               </div>
               <div className="w-[76] h-[80] bg-[#D9D9D9] items-center"> 

               <Image
               src={"/images/stuart sofa 1.png"}
               alt="k"
               width={76}
               height={80}

               />
               </div>
               <div className="w-[76] h-[80] bg-[#D9D9D9] items-center"> 

               <Image
               src={"/images/sofa.png"}
               alt="k"
               width={76}
               height={80}

               />
               </div>
            </div>
            </div>
            </div>

        </div>
        </div>
       

  )
}
