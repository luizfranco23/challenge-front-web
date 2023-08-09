import { useEffect, useState } from "react"
import axios from "axios"
import React from 'react';
import { Wine } from "../types/IProducts";




const useGetProducts = () => {
    const [product, setProduct] = useState<Wine[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getData() {
            setLoading(true)
            try {
                const response = await axios.get("http://localhost:3000/products");
                setProduct(response.data.items);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        getData();
    }, [])

    return { product, loading }

}

export default useGetProducts;