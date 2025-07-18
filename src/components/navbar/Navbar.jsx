import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import myLogo from '../../assets/Sky_Logo_.png'
// import  customer4 from '../../assets/customer4.png'

const Navbar = () => {

    return (
 <nav className="bg-pink-600
         sticky top-0">
            <div className="lg:flex lg:justify-between items-center  py-3 lg:px-3">
                {/* LEFT  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className="font-bold text-white text-2xl text-center"> 
                            <img className="font-bold text-white text-2xl text-center m-auto text-red  w-26 h-6" src={myLogo}  alt="img"/>
                             </h2>
                    </Link>
                </div>

                {/* RIGHT  
                    */}
                <div className="
                    right flex justify-center mb-4 lg:mb-0">
                    <nav>
                        <ul className="flex space-x-3 text-white font-meadium text-md px-5">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/allproduct'}>
                                    All Product
                                </Link>
                            </li>
                            <Link to={'/signup'}>Signup</Link>

                            <li>
                                <Link to={'/userdashboard'}>Sky</Link>
                            </li>
                            <li>
                                <Link to={'/cart'}>Cart(0)</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
                <SearchBar/>
            </div>
        </nav>
    )

}




export default Navbar;