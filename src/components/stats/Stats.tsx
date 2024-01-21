import { stats, statsframe } from "../../assets";
import { Icons } from "../../icons";

export default function Stats() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center">
      <div className="relative w-full lg:w-1/2 lg:h-[46rem] bg-primary">
        <div className="relative px-8 lg:px-[4.5rem] py-24 z-10">
          <h2 className="druk w-full lg:w-[39.58vw] text-xl lg:text-4xl font-bold leading-[]52px ">
            USE YOUR STATS TO MAKE MOVES
          </h2>
          <p className="text-lg mt-[22px] leading-8">
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
          </p>
          <p className="text-lg mt-7 leading-8">
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced{" "}
          </p>
          <p className="text-lg mt-7 leading-8">
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
          </p>

          <div className="flex mt-8 items-center justify-start gap-3">
            <p className="text-[17px] text-black">Try it now</p>
            <Icons.next />
          </div>
        </div>
        <img
          src={stats}
          className="absolute left-0 top-0 w-full h-full object-cover"
          alt=""
        />
      </div>

      <div className="w-full lg:w-1/2 h-[30rem] lg:h-[46rem] bg-[#000] flex justify-center items-center">
        <div className="w-[77.5%] bg-primary lg:h-[31.5rem]">
            <div className="w-full h-full ml-[10px] -mt-[10px]">
                <img src={statsframe} className="w-full object-contain lg:object-cover h-full" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
