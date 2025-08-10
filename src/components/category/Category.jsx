import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const categoryData = [
  { image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png', name: 'fashion' },
  { image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png', name: 'shirt' },
  { image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png', name: 'jacket' },
  { image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png', name: 'mobile' },
  { image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png', name: 'laptop' },
  { image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png', name: 'shoes' },
  { image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png', name: 'home' },
  { image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png', name: 'books' }
];

const Category = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="mt-2 xs:mt-0 sm:mt-5 ">
      <div className="flex flex-col">
        <div className="flex overflow-x-scroll md:justify-center  lg:justify-center hide-scroll-bar">
          <motion.div
            className="flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categoryData.map((item, index) => (
              <motion.div
                key={index}
                className="px-4 xs:px-3 md:px-6  lg:px-9 sm:mt-2 text-center "
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
  onClick={() => navigate(`category/${item.name}`)}
  className="w-24 h-24 lg:w-24 lg:mt-5 lg:h-24 xs:w-12 xs:h-12 md:w-[65px] md:h-[65px] rounded-full bg-gradient-to-l from-blue-700 via-blue-200 to-blue-50 shadow-lg cursor-pointer mb-1 flex items-center justify-center"
>
  <motion.img
    src={item.image}
    alt={item.name}
    className="w-14 h-14 "
    whileHover={{ rotate: 10 }}
    transition={{ type: "spring", stiffness: 300 }}
  />
</div>

                <h1 className="text-sm lg:text-lg font-medium first-letter:uppercase">
                  {item.name}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Category;
