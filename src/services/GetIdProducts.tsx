import { useEffect, useState } from "react";
import axios from "axios";
import { Wine } from '../types/IProducts';

const useGetProductById = () => {
    const [data, setData] = useState<Wine[]>([]);

    useEffect(() => {
        const localStorageId = localStorage.getItem("id");

        async function getProductId() {
            try {
                const response = await axios.get("http://localhost:3000/products");
                const productData = response.data.items;
                const filterData = productData.find((e: any) => e.id == localStorageId);
                setData(filterData ? [filterData] : []);
            } catch (error) {
                console.log(error);
            }
        }

        getProductId();
    }, []);

    return { data };
};

export default useGetProductById;
