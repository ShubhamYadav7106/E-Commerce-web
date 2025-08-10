import { Button } from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { motion } from "framer-motion";




const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext)
    const { loading, getAllProduct } = context;
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));

        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <div className="mt-10 xs:mt-5">
            <div className="">
                <h1 className=" text-center mb-5 xs:mb-2 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container xs:py-2 xs:px-6 px-5 py-5 mx-auto">
                    <div className="flex justify-center">
                        {loading && <Loader />}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrl } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                    <div className="h-full bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer flex flex-col">

                                        <img
                                            onClick={() => navigate(`/productInfo/${id}`)}
                                            className="lg:h-60  h-52 w-full object-contain"
                                            src={productImageUrl}
                                            alt="img"
                                        />

                                        <div className="p-6 flex flex-col flex-grow">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                E-sky
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-2 flex-grow">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="mt-auto">
                                                {Array.isArray(cartItems) && cartItems.some((p) => p.id === item.id) ? (
                                                    <motion.button
                                                        onClick={() => deleteCart(item)}
                                                        className="w-full bg-red-600 text-white px-6 py-1 rounded-full text-lg shadow-md hover:bg-red-700"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Delete From Cart
                                                    </motion.button>
                                                ) : (
                                                    <motion.button
                                                        onClick={() => addCart(item)}
                                                        className="w-full bg-blue-600 text-white px-6 py-1 rounded-full text-lg shadow-md hover:bg-blue-700"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Add To Cart
                                                    </motion.button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;