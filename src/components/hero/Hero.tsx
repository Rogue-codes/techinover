import { davido, frame, lady } from "../../assets";
import { Icons } from "../../icons";

export default function Hero() {
  return (
    <div className='w-full px-[4.17vw] pt-[11.25rem] pb-[21rem] relative bg-[#000]'>
        <h2 className="druk relative z-50 w-[51.72vw]  text-6xl font-bold leading-[76px] text-white">AN INNOVATIVE PLATFORM THAT <span className="text-primary"> SUPPORTS ARTISTS.</span></h2>
        <p className="product-sans relative z-50 text-white w-[45%] leading-8 text-lg">Figma files can also be downloaded from our store. These files include the latest Figma features and are </p>
        <div className="flex relative z-50 mt-8 items-center justify-start gap-3">
          <p className="text-[17px] text-white">Try it now</p>
          <Icons.nextwhite/>
        </div>
        <div className="absolute left-[40rem] h-[29.75rem] top-[23.25rem] w-[26.11vw] z-50">
            <img src={lady} className="w-full h-full" alt="" />
        </div>

        <div className="absolute right-0 top-[10.375rem] w-[21.11vw] z-50">
            <img src={davido} className="w-full" alt="" />
        </div>
        <img src={frame} className="absolute z-[20] left-0 top-0 w-full h-full object-cover " alt=""/>
    </div>
  )
}
