import { useNavigate, useParams } from "react-router-dom";

import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import { motion } from "framer-motion";


const categoryList = [
    {
        name: 'fashion'
    },
    {
        name: 'shirt'
    },
    {
        name: 'jacket'
    },
    {
        name: 'mobile'
    },
    {
        name: 'laptop'
    },
    {
        name: 'shoes'
    },
    {
        name: 'home'
    },
    {
        name: 'books'
    }
]

const UpdateProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProductFunction } = context;

    // navigate 
    const navigate = useNavigate();
    const { id } = useParams()
    console.log(id)

    // product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const getSingleProductFunction = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
            const product = productTemp.data();
            setProduct({
                title: product?.title,
                price: product?.price,
                productImageUrl: product?.productImageUrl,
                category: product?.category,
                description: product?.description,
                quantity : product?.quantity,
                time: product?.time,
                date: product?.date
            })
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const updateProduct = async () => {
        setLoading(true)
        try {

            await setDoc(doc(fireDB, 'products', id), product)
            toast.success("Product Updated successfully")
            navigate('/admin-dashboard');
             getAllProductFunction();
            setLoading(false);
            

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getSingleProductFunction();
    }, []);
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                <div className="login_Form bg-blue-50 px-8 py-6 border border-blue-400 rounded-xl shadow-md">

                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-blue-500 '>
                            Update Product
                        </h2>
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    title: e.target.value
                                })
                            }}
                            placeholder='Product Title'
                            className='bg-blue-50 border text-blue-400 border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-400'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    price: e.target.value
                                })
                            }}
                            placeholder='Product Price'
                            className='bg-blue-50 border text-blue-400 border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-400'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value
                                })
                            }}
                            placeholder='Product Image Url'
                            className='bg-blue-50 border text-blue-400 border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-400'
                        />
                    </div>

                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    category: e.target.value
                                })
                            }}
                            className="w-full px-1 py-2 text-blue-400 bg-blue-50 border border-blue-200 rounded-md outline-none  ">
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value
                                return (
                                    <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="mb-3">
                        <textarea
                            value={product.description}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    description: e.target.value
                                })
                            }} name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-blue-400 bg-blue-50 border border-blue-200 rounded-md outline-none placeholder-blue-400 ">

                        </textarea>
                    </div>

                    <div className="mb-3">
                        <motion.button
                            onClick={updateProduct}
                            type='button'
                            className="w-full bg-blue-600 text-white px-6 py-1 rounded-full text-lg shadow-md hover:bg-blue-700"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                        >
                            Update Product
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProductPage;