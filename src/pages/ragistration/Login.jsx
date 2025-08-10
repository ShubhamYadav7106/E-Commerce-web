import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { motion } from "framer-motion";




const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;


    const navigate = useNavigate();


    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });


    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user))
                    setUserLogin({
                        email: "",
                        password: ""
                    })
                    toast.success("Login Successfully");
                    setLoading(false);
                    if (user.role === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }
    return (
        <div className=' flex justify-center  items-center h-screen'>
            {loading && <Loader />}

            <div className="login_Form bg-blue-50 xs:px-2 px-8 py-6  border border-blue-100 rounded-xl shadow-md">


                <div className="mb-5 ">
                    <h2 className='text-center text-2xl font-bold text-blue-500 '>
                        Login
                    </h2>
                </div>


                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
                    />
                </div>


                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
                    />
                </div>


                <div className="mb-5">
                    <motion.button
                        type='button'
                        onClick={userLoginFunction}
                        className="w-full bg-blue-600 text-white px-6 py-1 rounded-full text-lg shadow-md hover:bg-blue-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}                    >
                        Login
                    </motion.button>

                </div>

                <div>
                    <h2 className='text-black'>Don't Have an account <Link className=' text-blue-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;