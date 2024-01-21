import { adekunle, burna, rema, tiwa, wizzy } from "../../assets";
import { motion } from "framer-motion";
import {
  fade,
  fadeIn,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
} from "../../utils/framer-motion-variants";
import { useRef } from "react";

export default function Join() {
  const scrollRef = useRef(null);
  const artistArr = [wizzy, burna, tiwa, rema, adekunle];
  return (
    <div className="w-full relative py-[3.75rem] bg-[#000]">
      <motion.h2
        variants={fadeUp1}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="druk relative z-20 leading-[59px] text-center w-full lg:w-[49.67%] text-2xl lg:text-4xl text-white mx-auto"
      >
        JOIN TOP ARTISTS, BUILD YOUR{" "}
        <span className="text-primary">FANBASE</span>
      </motion.h2>

      <motion.p
        variants={fadeUp2}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="product-sans relative z-20 w-full lg:w-[39%] mx-auto text-center mt-[1.125rem] text-[#6F767E] text-lg leading-8"
      >
        Figma files can also be downloaded from our store. These files include
        the latest Figma features and are synced
      </motion.p>

      <div className="w-full flex justify-between items-center px-8 lg:px-[4.17vw]">
        {artistArr.map((artist, index) => (
          <motion.div
            variants={
              index === 0
                ? fadeUp2
                : index === 1
                ? fadeUp3
                : index === 2
                ? fade
                : index === 3
                ? fadeUp4
                : fadeIn
            }
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className={`${
              index === 0
                ? "mt-24"
                : index === 1
                ? "mt-[14.25rem]"
                : index === 2
                ? "mt-16"
                : index === 3
                ? "mt-[14.25rem]"
                : "mt-24"
            } w-[17vw] h-[13.75rem] rounded-full`}
            key={index}
          >
            <img src={artist} alt="" />
          </motion.div>
        ))}
      </div>

      <div
        className="w-full h-full left-0 top-0 bg-white absolute"
        style={{
          background:
            "linear-gradient(90deg, #111315 0%, rgba(17, 19, 21, 0.86) 34.76%, rgba(17, 19, 21, 0.40) 74.56%, rgba(17, 19, 21, 0.00) 98.65%)",
        }}
      ></div>
    </div>
  );
}
