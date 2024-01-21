import { useRef } from "react";
import { Icons } from "../../icons";
import { fadeUp1, fadeUp2, fadeUp3 } from "../../utils/framer-motion-variants";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollRef = useRef(null);

  return (
    <footer className="w-full text-white py-[3.75rem] bg-black px-[4.17vw]">
      <motion.div
        variants={fadeUp1}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="w-full flex-col lg:flex-row justify-between items-start"
      >
        <div className="druk w-full lg:w-[30.14vw] text-xl font-bold">
          <p>SHORT LINE ABOUT US</p>
          <p>THREE WORDS HERE</p>
        </div>

        <div className="w-full lg:w-[8vw] mt-6 lg:mt-0 druk text-xl font-bold">
          <p>CONNECT</p>
          <p>WITH</p>
          <p>US</p>
        </div>

        <div className="clash text-md mt-6 lg:mt-0  lg:text-xs font-medium w-full lg:w-[15.14vw] flex justify-between items-center">
          <ul>
            <li>Twitter</li>
            <li>Discord</li>
            <li>Instagram</li>
          </ul>

          <ul>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Contact</li>
          </ul>
        </div>
      </motion.div>

      <motion.hr
        variants={fadeUp2}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="my-8"
      />

      <motion.div
        variants={fadeUp3}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="clash flex-col lg:flex-row justify-between items-center"
      >
        <div className="w-full lg:w-[23.12vw] flex justify-between items-center">
          <div className="flex justify-between items-center gap-5">
            <p>2022</p>
            <Icons.dot />
            <p>PLATFORM</p>
          </div>

          <div>
            <p>2022</p>
          </div>
        </div>
        <div className="w-full mt-6 lg:mt-0 lg:w-[27.75vw] flex justify-between items-center">
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
        </div>
      </motion.div>
    </footer>
  );
}
