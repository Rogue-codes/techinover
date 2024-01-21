import { useRef } from "react";
import { careers } from "../../assets";
import { Icons } from "../../icons";
import { motion } from "framer-motion";
import {
  fade,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
} from "../../utils/framer-motion-variants";

export default function CareersInYourHand() {
  const scrollRef = useRef(null);
  return (
    <div className="py-[5.4rem] px-[4.17vw] flex flex-col lg:flex-row justify-between items-center w-full bg-white">
      <motion.div variants={fade}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef} className="relative h-[20rem] lg:h-[37.75rem] w-full lg:w-[37.29vw] py-12">
        <div className="absolute w-full top-0 left-0 h-[20rem] lg:h-[37.75rem] bg-primary"></div>
        <div className="absolute w-full top-0 -rotate-3 left-0 h-[20rem] lg:h-[37.75rem]">
          <img src={careers} className="w-full h-full object-cover" alt="" />
        </div>
      </motion.div>

      <div className="relative w-full lg:w-[42.82vw]">
        <motion.h2
          variants={fadeUp1}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="druk text-2xl text-center mt-12 lg:mt-0 lg:text-start lg:text-4xl"
        >
          YOUR CAREER IS IN YOUR HANDS
        </motion.h2>
        <motion.p
          variants={fadeUp2}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-lg mt-[22px] leading-8 lg:text-start text-center"
        >
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </motion.p>
        <motion.p
          variants={fadeUp3}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-lg mt-7 leading-8 lg:text-start text-center"
        >
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced{" "}
        </motion.p>
        <motion.p
          variants={fadeUp4}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-lg mt-7 leading-8 lg:text-start text-center"
        >
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </motion.p>

        <motion.div
          variants={fadeUp4}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="flex mt-8 items-center justify-center lg:justify-start gap-3"
        >
          <p className="text-[17px] text-black">Try it now</p>
          <Icons.next />
        </motion.div>
      </div>
    </div>
  );
}
