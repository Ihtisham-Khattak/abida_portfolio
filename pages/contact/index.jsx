import { motion } from "framer-motion";

import {
  MdOutlineMailOutline,
  MdOutlinePhoneEnabled,
  MdOutlineShareLocation,
} from "react-icons/md";

import { fadeIn } from "../../variants";
import Socials from "../../components/Socials";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <span className="flex items-center justify-center gap-x-2">
              <MdOutlineShareLocation />
              Abida Gul Sharjah, UAE
            </span>
            <span className="flex items-center justify-center gap-x-2">
              <MdOutlinePhoneEnabled /> +971 56 383 6371
            </span>
            <span className="flex items-center justify-center gap-x-2">
              <MdOutlineMailOutline /> abidagul93@example.com
            </span>
          </motion.h1>

          <Socials className="py-10" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
