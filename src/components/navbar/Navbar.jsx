import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import myLogo from '../../assets/Sky_Logo_.png';
import { useSelector } from "react-redux";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const user = JSON.parse(localStorage.getItem('users'));
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  const logout = () => {
    localStorage.clear('users');
    navigate("/login");
  };

  const linkHover = { scale: 1.1, color: "#5279dd" };

  return (
    <nav className="bg-gradient-to-l z-10 from-blue-700 via-blue-200 to-blue-50 shadow-lg sticky top-0">
      
      <div className="xs:flex xs:items-center xs:justify-between xs:px-4 xs:py-3 hidden">
        <Link to={'/'}>
          <motion.img
            onClick={scrollToTop}
            src={myLogo}
            alt="Logo"
            className="w-26 h-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 xs:hidden">
        <div className="left py-3 lg:py-0">
          <Link to={'/'}>
            <motion.img
              onClick={scrollToTop}
              src={myLogo}
              alt="Logo"
              className="m-auto w-26 h-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>
        </div>

        <div className="right flex justify-center mb-4 lg:mb-0">
          <nav>
            <ul className="flex space-x-3 text-[#253C78] font-medium text-md px-5">
              <motion.li whileHover={linkHover}>
                <Link to={'/'}>Home</Link>
              </motion.li>
              <motion.li whileHover={linkHover}>
                <Link to={'/allproduct'}>All Product</Link>
              </motion.li>
              {!user && (
                <motion.li whileHover={linkHover}>
                  <Link to={'/signup'}>Signup</Link>
                </motion.li>
              )}
              {!user && (
                <motion.li whileHover={linkHover}>
                  <Link to={'/login'}>Login</Link>
                </motion.li>
              )}
              {user?.role === "user" && (
                <motion.li whileHover={linkHover}>
                  <Link to={'/user-dashboard'}>{user.name}</Link>
                </motion.li>
              )}
              {user?.role === "admin" && (
                <motion.li whileHover={linkHover}>
                  <Link to={'/admin-dashboard'}>{user.name}</Link>
                </motion.li>
              )}
              {user && (
                <motion.li className="cursor-pointer" onClick={logout} whileHover={linkHover}>
                  Logout
                </motion.li>
              )}
              <motion.li whileHover={linkHover}>
                <Link to={'/cart'}>Cart({cartItems.length})</Link>
              </motion.li>
            </ul>
          </nav>
        </div>

        <SearchBar />
      </div>


<AnimatePresence>
  {menuOpen && (
    
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute top-[50px] left-0 w-full shadow-lg z-50 xs:flex xs:flex-col xs:space-y-3 xs:px-4 xs:pb-4 hidden 
                 bg-gradient-to-l from-blue-700 via-blue-200 to-blue-50 text-blue-900"
    >
      <SearchBar/>
      <Link to={'/'} onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to={'/allproduct'} onClick={() => setMenuOpen(false)}>All Product</Link>
      {!user && <Link to={'/signup'} onClick={() => setMenuOpen(false)}>Signup</Link>}
      {!user && <Link to={'/login'} onClick={() => setMenuOpen(false)}>Login</Link>}
      {user?.role === "user" && <Link to={'/user-dashboard'} onClick={() => setMenuOpen(false)}>{user.name}</Link>}
      {user?.role === "admin" && <Link to={'/admin-dashboard'} onClick={() => setMenuOpen(false)}>{user.name}</Link>}
      {user && <span className="cursor-pointer" onClick={() => { logout(); setMenuOpen(false); }}>Logout</span>}
      <Link to={'/cart'} onClick={() => setMenuOpen(false)}>Cart({cartItems.length})</Link>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
};

export default Navbar;
