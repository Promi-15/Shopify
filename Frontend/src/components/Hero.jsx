// import { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import slider1 from "../assets/slider-1.jpg";
// import banner2 from "../assets/b2.png"
// import banner3 from "../assets/b3.png"
// import banner4 from "../assets/b4.png";
import { motion } from "framer-motion";
const Hero = () => {
  // const images = [banner,banner2,banner3, banner4];
  // const [index, setIndex] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex((index + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(timer);
  // }, [index]);

  return (
    // <div className="flex flex-col sm:flex-row lg:flex-row justify-around border bg-gray-100 p-9 mx-2 lg:mx-10 mt-5 rounded h-[600px]">
    //   <motion.div
    //     className="flex flex-col space-y-6 justify-center "
    //     initial={{ opacity: 0, x: -50 }}
    //     animate={{ opacity: 1, x: 0 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     <div className="flex gap-3 items-center text-lg">
    //       <hr className=" border-2 border-black w-8" />
    //       <p className="italic text-lg">
    //         {" "}
    //         <b>Our Best Seller</b>
    //       </p>
    //     </div>

    //     <motion.h1
    //       initial={{ y: 50, opacity: 0 }}
    //       animate={{ y: 0, opacity: 1 }}
    //       transition={{ duration: 0.6, delay: 0.2 }}
    //       className="text-5xl prata-regular"
    //     >
    //       Welcome to Shopify
    //     </motion.h1>

    //     <div className="flex gap-3 items-center text-lg">
    //       <p className="italic text-lg">
    //         <b>Shop now</b>
    //       </p>
    //       <hr className=" border-2 border-black w-8" />
    //       <hr />
    //     </div>
    //   </motion.div>
    //   <motion.div
    //     // key={index}
    //     className="lg:w-[490px] lg:h-[450px] flex items-center justify-center mt-5"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     <img
    //       src={slider1}
    //       className="object-contain w-fit h-96 "
    //       alt="Banner"
    //     />
    //   </motion.div>
    // </div>
    <div className="mx-10 mt-5 relative">
      <img src={slider1} className="rounded-2xl" alt="" />
      <motion.div
        className="flex flex-col space-y-6 justify-center "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-3 items-center text-lg absolute top-60 ml-40 ">
          <hr className=" border-2 border-black w-8" />
          <p className="italic text-xl">
            {" "}
            <b>Our Best Seller</b>
          </p>
        </div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl prata-regular absolute top-72 ml-40"
        >
          Welcome to Shopify
        </motion.h1>

        <div className="flex gap-3 items-center text-lg absolute top-80 ml-40 mt-10">
          <p className="italic text-xl">
            <b>Shop now</b>
          </p>
          <hr className=" border-2 border-black w-8" />
          <hr />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
