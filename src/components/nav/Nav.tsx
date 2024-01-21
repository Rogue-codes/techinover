import { HambergerMenu } from "iconsax-react";

export default function Nav() {
  return (
    <nav className='absolute z-[999999] flex justify-between items-center left-0 top-0 w-full py-6 px-[4.17vw]'>
        <h2 className="product-sans text-xl font-bold text-primary">LOGO</h2>
        <div className="w-[14.38vw] hidden  text-white lg:flex justify-between items-center">
            <p>Features</p>
            <p>News</p>
        </div>

         <div className="hidden lg:flex justify-between gap-4 items-center">
            <button className="px-6 py-[10px] bg-transparent text-primary">Sign up</button>
            <button className="px-6 py-[10px] bg-primary text-black">Log in</button>
         </div>

         <HambergerMenu size={25} className="text-primary font-bold lg:hidden"/>
    </nav>
  )
}
