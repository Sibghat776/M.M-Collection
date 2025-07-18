import React, { memo, useState } from "react";
import {
    Modal,
    Box,
    TextField,
    Button,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { AddCircleRounded } from "@mui/icons-material";

const ProductsPage = ({ title = "Our Products" }) => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        name: "",
        price: "",
        phone: "",
        desc: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            ...form,
            imageURL: URL.createObjectURL(form.image),
        };
        setProducts([newProduct, ...products]);
        setForm({ name: "", price: "", phone: "", desc: "", image: null });
        setOpen(false);
    };

    const sendWhatsApp = (product) => {
        const msg = `ASSALAM U ALAIKUM! Mujhe yeh product chahiye:\n\n*${product.name}*\n${product.desc}\nPrice: Rs ${product.price} PKR`;
        const url = `https://wa.me/92${product.phone}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen pb-16 pt-10 px-4 md:px-8">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight uppercase border-b-4 border-yellow-400 inline-block px-6 pb-2 rounded">
                        {title}
                    </h2>
                </div>

                {/* Add Button */}
                <div className="fixed top-24 right-4 z-50">
                    <Button
                        variant="contained"
                        color="warning"
                        startIcon={<AddCircleRounded />}
                        onClick={() => setOpen(true)}
                        className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-base capitalize transition-all duration-300 ease-in-out min-w-0 overflow-hidden max-w-[44px] md:max-w-full"
                    >
                        <span className="hidden md:inline">Add Product</span>
                    </Button>
                </div>

                {/* Modal */}
                <Modal open={open} onClose={() => setOpen(false)}>
                    <Box className="w-[90%] sm:w-[500px] bg-white p-6 rounded-xl shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Typography variant="h5" className="text-center font-semibold text-gray-800 mb-4">
                            Add New Product
                        </Typography>
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <TextField
                                label="Product Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                fullWidth
                                required
                                size="small"
                            />
                            <TextField
                                label="Price (PKR)"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                type="number"
                                fullWidth
                                required
                                size="small"
                            />
                            <TextField
                                label="Phone (92xxxxxx)"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                type="number"
                                fullWidth
                                required
                                size="small"
                            />
                            <TextField
                                label="Image"
                                name="image"
                                onChange={handleChange}
                                type="file"
                                inputProps={{ accept: "image/*" }}
                                className="sm:col-span-2"
                                fullWidth
                                required
                                size="small"
                            />
                            <TextField
                                label="Description"
                                name="desc"
                                value={form.desc}
                                onChange={handleChange}
                                multiline
                                rows={3}
                                className="sm:col-span-2"
                                fullWidth
                                required
                                size="small"
                            />
                            <div className="sm:col-span-2 text-right">
                                <Button variant="contained" color="success" type="submit">
                                    Add
                                </Button>
                            </div>
                        </form>
                    </Box>
                </Modal>
                <div className="flex flex-wrap justify-center gap-8 mt-12">
                    {products.length === 0 ? (
                        <Typography variant="h6" className="text-center text-gray-600">
                            No products added yet.
                        </Typography>
                    ) : (
                        products.map((prod, index) => {
                            const originalPrice = parseInt(prod.price) + 100;

                            return (
                                <div
                                    key={index}
                                    className="bg-white max-w-xs w-full rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 p-6 flex flex-col items-center group border border-gray-100 hover:border-green-500"
                                >
                                    <div className="overflow-hidden rounded-xl w-full">
                                        <img
                                            src={prod.imageURL}
                                            alt={prod.name}
                                            className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="mt-4 w-full">
                                        <h5 className="text-xl font-bold text-gray-800 mb-1">{prod.name}</h5>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-sm text-gray-400 line-through">
                                                 {originalPrice} PKR
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-lg text-green-600 font-semibold">
                                                 {prod.price} PKR
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 mb-4">{prod.desc}</p>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            startIcon={<WhatsAppIcon />}
                                            onClick={() => sendWhatsApp(prod)}
                                            className="!rounded-full !px-6 !py-2 !text-sm !font-semibold"
                                        >
                                            WhatsApp
                                        </Button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            <Contact />
            <Footer />
        </>
    );
};

export default memo(ProductsPage);
