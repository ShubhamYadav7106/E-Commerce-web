import { motion } from "framer-motion";
import heroImage from '../../assets/myShopHero1.png';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:border-b-2  border-gray-200 overflow-hidden ">
      
      <motion.div
  className="flex-1 md:flex-[0.6] flex justify-center "
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <img
    src={heroImage}
    alt="Ecommerce Hero"
    className="w-full h-auto object-cover  xs:relative xs:bottom-5 
               sm:scale-[1.05]  
               sm:aspect-[14/7]
               sm:-z-10
               
               " 
    style={{ aspectRatio: "16/9" }}
  />
</motion.div>

<motion.div
  className="flex-1 md:flex-[0.4] flex  flex-col justify-center items-center text-center bg-white xs:pb-0 xs:py-0 py-4 px-4 sm:py-2 md:py-2 md:px-2 sm:px-4
             sm:gap-y-1
             xs:gap-y-1
             xs:relative xs:bottom-8
            "
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
>
  <h1 className="text-3xl sm:text-[37px] md:text-[30px] lg:text-[42px] font-extrabold xs:font-bold sm:font-bold text-gray-800 md:mb-0  sm:mb-2">
    YOUR ONLINE SHOP
  </h1>
  <p className="text-base sm:text-xl md:text-xl lg:text-2xl text-gray-600 md:mb-3 mb-1 sm:mb-1">
    24/7 Shopping & Fast Delivery
  </p>
  <Link to={'/allproduct'}>
    <motion.button
      className="bg-blue-600  text-white xs:px-28 sm:px-24 md:px-11 py-3 xs:py-2 rounded-full text-lg shadow-md hover:bg-blue-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Shop Now
    </motion.button>
  </Link>
</motion.div>

    </div>
  );
};

export default HeroSection;
