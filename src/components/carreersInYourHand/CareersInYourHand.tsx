import { careers } from "../../assets";
import { Icons } from "../../icons";

export default function CareersInYourHand() {
  return (
    <div className="py-[5.4rem] px-[4.17vw] flex flex-col lg:flex-row justify-between items-center w-full bg-white">
      <div className="relative h-[20rem] lg:h-[37.75rem] w-full lg:w-[37.29vw] py-12">
        <div className="absolute w-full top-0 left-0 h-[20rem] lg:h-[37.75rem] bg-primary"></div>
        <div className="absolute w-full top-0 -rotate-3 left-0 h-[20rem] lg:h-[37.75rem]">
          <img src={careers} className="w-full h-full object-cover" alt="" />
        </div>
      </div>

      <div className="relative w-full lg:w-[42.82vw]">
        <h2 className="druk text-2xl text-center mt-12 lg:mt-0 lg:text-start lg:text-4xl">YOUR CAREER IS IN YOUR HANDS</h2>
        <p className="text-lg mt-[22px] leading-8 lg:text-start text-center">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <p className="text-lg mt-7 leading-8 lg:text-start text-center">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced{" "}
        </p>
        <p className="text-lg mt-7 leading-8 lg:text-start text-center">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>

        <div className="flex mt-8 items-center justify-center lg:justify-start gap-3">
          <p className="text-[17px] text-black">Try it now</p>
          <Icons.next/>
        </div>
      </div>
    </div>
  );
}
