import { useEffect, useState } from "react"
import axios from "axios"
import React from 'react';


interface Wine {
    id: number;
    image: string;
    name: string;
    price: number;
    discount: number;
    priceMember: number;
    priceNonMember: number;
    type: string;
    classification: string;
    size: string;
    rating: number;
    avaliations: number;
    country: string;
    region: string;
    flag: string;
    sommelierComment: string;
}

export interface IProctList {
    page: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
    items: Wine[];
}


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