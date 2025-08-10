import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
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

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity : 1,
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
const handleChange = (e) => {
  setProduct({
    ...product,
    [e.target.name]: e.target.value
  });
};

    const addProductFunction = async () => {
        if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
            return toast.error("all fields are required")
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product)
            toast.success("Add product successfully");
            navigate('/admin-dashboard')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error("Add product failed");
        }

    }
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
              
                <div className="login_Form bg-blue-50 px-8 py-6 border border-blue-100 rounded-xl shadow-md">

                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-blue-500 '>
                            Add Product
                        </h2>
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={handleChange}
                            placeholder='Product Title'
                            className='bg-blue-50 border text-blue-300 border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            placeholder='Product Price'
                            className='bg-blue-50 border text-blue-300 border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={handleChange}
                            placeholder='Product Image Url'
                            className='bg-blue-50 border text-blue-300 border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-300'
                        />
                    </div>

                    <div className="mb-3">
                        <select
                        name="category"
                            value={product.category}
                            onChange={handleChange}
                            className="w-full px-1 py-2 text-blue-300 bg-blue-50 border border-blue-200 rounded-md outline-none  ">
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
                            onChange={handleChange} name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-blue-300 bg-blue-50 border border-blue-200 rounded-md outline-none placeholder-blue-300 ">

                        </textarea>
                    </div>

                    <div className="mb-3">
                        <motion.button
                            onClick={addProductFunction}
                            type='button'
                            className="w-full bg-blue-600 text-white px-6 py-1 rounded-full text-lg shadow-md hover:bg-blue-700"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                        >
                            Add Product
                        </motion.button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;