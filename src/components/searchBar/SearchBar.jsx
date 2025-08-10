import { useContext, useState } from "react";
import MyContext from "../../context/myContext";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = () => {
  const context = useContext(MyContext);
  const { getAllProduct } = context;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filterSearchData = getAllProduct
    .filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8);

  return (
    <div className="relative">
      <div className="input flex justify-center">
        <motion.input
          type="text"
          placeholder="Search here..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="bg-white/20 backdrop-blur-md placeholder-gray-300 text-white rounded-full px-5 py-2 md:mr-2 w-96 outline-none border border-white/30 shadow-lg"
          whileFocus={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.4)" }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="flex justify-center">
        <AnimatePresence>
          {search && (
            <motion.div
              className="absolute bg-white/90 backdrop-blur-md w-96 z-50 my-2 rounded-xl px-3 py-2 shadow-xl border border-gray-200"
              initial={{ opacity: 0, y: -15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {filterSearchData.length > 0 ? (
                filterSearchData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="py-2 px-3 cursor-pointer rounded-lg flex items-center gap-3 text-gray-800"
                    onClick={() => navigate(`/productinfo/${item.id}`)}
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(59,130,246,0.1)" }}
                    transition={{ duration: 0.15 }}
                  >
                    <img className="w-10 h-10 rounded-md object-cover" src={item.productImageUrl} alt="" />
                    <span>{item.title}</span>
                  </motion.div>
                ))
              ) : (
                <motion.div className="flex justify-center py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <img
                    className="w-16 opacity-70"
                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                    alt="No results"
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchBar;
