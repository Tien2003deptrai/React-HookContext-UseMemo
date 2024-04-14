import axios from "axios";

export const getCategories = async () => {
    const res = await axios.get("/products/categories");
    return res;
}

export const getAllProducts = async () => {
    const res = await axios.get("/products");
    return res;
}

export const getOneProduct = async (id) => {
    const res = await axios.get(`/products/${id}`);
    return res;
}

// res.data 
