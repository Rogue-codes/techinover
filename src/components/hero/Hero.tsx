import { useRef, useState } from "react";
import { davido, frame, lady } from "../../assets";
import { Icons } from "../../icons";
import { motion } from "framer-motion";
import {
  fadeUp1,
  fadeUp2,
  fadeUp3,
  hiddenMask,
  hiddenMask_,
  visibleMask,
  visibleMask_,
} from "../../utils/framer-motion-variants";

export default function Hero() {
  const scrollRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className="w-full px-[4.17vw] pt-24 lg:pt-[11.25rem] pb-[29rem] lg:pb-[21rem] relative bg-[#000]">
      <motion.h2
        variants={fadeUp1}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="druk relative z-50 w-full lg:w-[51.72vw] text-center lg:text-start text-2xl lg:text-6xl font-bold leading-[76px] text-white"
      >
        AN INNOVATIVE PLATFORM THAT{" "}
        <span className="text-primary"> SUPPORTS ARTISTS.</span>
      </motion.h2>
      <motion.p
        variants={fadeUp2}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="product-sans relative z-50 text-white w-full text-center lg:text-start lg:w-[45%] leading-8 text-lg"
      >
        Figma files can also be downloaded from our store. These files include
        the latest Figma features and are{" "}
      </motion.p>
      <motion.div
        variants={fadeUp3}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="flex relative z-50 mt-8 items-center justify-center lg:justify-start gap-3"
      >
        <p className="text-[17px] text-white">Try it now</p>
        <Icons.nextwhite />
      </motion.div>
      <motion.div
        initial={false}
        animate={
          isLoaded
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="absolute left-[10%] lg:left-[40rem] h-[29.75rem] top-[35.25rem] lg:top-[23.25rem] w-[80%] lg:w-[26.11vw] z-50"
      >
        <img
          onLoad={() => setIsLoaded(true)}
          src={lady}
          className="w-full object-contain h-full"
          alt=""
        />
      </motion.div>

      <motion.div
        initial={false}
        animate={
          isLoaded
            ? { WebkitMaskImage: visibleMask_, maskImage: visibleMask_ }
            : { WebkitMaskImage: hiddenMask_, maskImage: hiddenMask_ }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="absolute hidden lg:block right-0 top-[10.375rem] w-[21.11vw] z-50"
      >
        <img src={davido} className="w-full" alt="" />
      </motion.div>
      <img
        onLoad={() => setIsLoaded(true)}
        src={frame}
        className="absolute z-[20] left-0 top-0 w-full h-full object-cover "
        alt=""
      />
    </div>
  );
}
