import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                <h1 className="text-xl text-pink-300 font-bold">All Product</h1>
               <Link to={'/add-product'}>
                <Button className="text-black normal-case text-sm  bg-pink-50 border border-pink-100 rounded-lg">Add Product</Button>
            </Link>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-pink-100 text-pink-400">
                    <tbody>
                        <tr>
                            <th className="h-12 px-6 text-md border-l border-pink-100 700 100 font-bold">S.No.</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 700 100">Location Name</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-100 700 100">Action</th>
                            <th className="h-12 px-6 text-md font-bold border-l border-pink-1030 700 100">Action</th>
                        </tr>
                        <tr className="text-pink-300">
                            <td className="h-12 px-6 text-md border-t border-l border-pink-100 500">
                                1.
                            </td>
                            <td className="h-12 px-6 text-md border-t border-l border-pink-100 500 first-letter:uppercase">
                                {'name'}
                            </td>
                            <td className="h-12 px-6 text-md border-t border-l border-pink-100 500 text-green-500 cursor-pointer">
                                Edit
                            </td>
                            <td className="h-12 px-6 text-md border-t border-l border-pink-100 500 text-red-500 cursor-pointer">
                                Delete
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetail;