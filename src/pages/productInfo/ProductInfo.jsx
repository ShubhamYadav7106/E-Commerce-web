import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ProductInfo = () => {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState("");
  const { id } = useParams();

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      setProduct({ ...productTemp.data(), id: productTemp.id });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <Layout>
      <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-wrap gap-6 justify-center">
              
              <div className="w-[350px] bg-gradient-to-b from-white via-gray-50 to-gray-50 rounded-lg shadow-lg p-4 flex items-center justify-center">
  <img
    className="w-full h-[400px] object-contain rounded-md"
    src={product?.productImageUrl}
    alt={product?.title}
  />
</div>

<div className="w-[350px] bg-gradient-to-b from-white via-gray-50 to-gray-50 rounded-lg shadow-lg p-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    {product?.title}
  </h2>

  <p className="text-xl font-bold text-blue-700 mb-4">
    ₹ {product?.price}
  </p>

  <div className="mb-6">
    <h3 className="font-semibold text-gray-700 mb-2">Description:</h3>
    <p className="text-gray-600">{product?.description}</p>
  </div>

  {cartItems.some((p) => p.id === product.id) ? (
    <motion.button
      onClick={() => deleteCart(product)}
      className="w-full bg-red-600 text-white px-6 py-1 rounded-full text-lg shadow-md hover:bg-red-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Remove from Cart
    </motion.button>
  ) : (
    <motion.button
      onClick={() => addCart(product)}
      className="w-full bg-blue-600 text-white px-6 py-1 rounded-full text-lg shadow-md hover:bg-blue-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Add to Cart
    </motion.button>
  )}
</div>


            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProductInfo;
