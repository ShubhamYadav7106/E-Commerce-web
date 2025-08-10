import { Dialog, DialogBody, } from "@material-tailwind/react";
import { useState } from "react";
import { motion } from "framer-motion";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <motion.button
                type="button"
                onClick={handleOpen}
                className="w-full bg-blue-600 text-white px-6 py-1 rounded-full text-lg shadow-md hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}            >
                Buy now
            </motion.button>
            <Dialog open={open} handler={handleOpen} className=" bg-blue-50">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })
                            }}
                            placeholder='Enter your name'
                            className='bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                })
                            }}
                            placeholder='Enter your address'
                            className='bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                })
                            }}
                            placeholder='Enter your pincode'
                            className='bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                })
                            }}
                            placeholder='Enter your mobileNumber'
                            className='bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300'
                        />
                    </div>

                    <div className="">
                        <motion.button

                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full bg-blue-600 text-white px-6 py-1 rounded-full text-lg shadow-md hover:bg-blue-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}                        >
                            Buy now
                        </motion.button>

                    </div>

                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;