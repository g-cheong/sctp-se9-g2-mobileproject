import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const API_URL = "https://677be8e220824100c07b3800.mockapi.io/";
export const API_PRODUCTS_URL = API_URL + "/products";

export const useProducts = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiUrl = API_PRODUCTS_URL;
    
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(apiUrl);
            console.log("API response:", response.data);
            setData(response.data);
        } catch (err) {
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);  
        }
    }, [apiUrl]);

    useEffect(() => {
        fetchData();
    }, []);

    return {data, setData, loading, error, refetch: fetchData};
};

export const useCreateProduct = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [createError, setCreateError] = useState(null);
    const [createProductData, setCreatedProductData] = useState(null);

    const createProduct = useCallback(async (productData) => {
        setIsCreating(true);
        setCreateError(null);
        setCreatedProductData(null);
        try {
            const response = await axios.post(API_PRODUCTS_URL, productData);
            setCreatedProductData(response.data);
            return response.data;
        } catch (err) {
            setCreateError(err);
        } finally {
            setIsCreating(false);
        }
    }, []);
    return {createProduct, isCreating, createError, setCreatedProductData};
};

export const useCategories = () => {
    const {data, loading, error} = useProducts();
    const [categories, setCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [errorCategories, setErrorCategories] = useState(null);

    useEffect( () => {
        if (!loading && !error) {
            try {
                const uniqueCategoryNames = [...new Set(data.map(product => product.category ))];
            
                const formattedCategoryNames = uniqueCategoryNames.map(categoryName => ({
                    label: categoryName,
                    value: categoryName,
                }));
                setCategories(formattedCategoryNames);
            } catch (err) {
                console.error("Error encountered while retrieving categories: ", err);
                setCategories([]);
                setErrorCategories(err);
            } finally {
                setLoadingCategories(false);
            }
        } else if (loading) {
            setLoadingCategories(true);
        } else if (error) {
            setErrorCategories(error);
            setLoadingCategories(false);
            setCategories([]);
        } else if(!loading || data.length === 0) {
            setLoadingCategories(false);
            setErrorCategories(null);
            setCategories([]);
        }
    }, [data, loading, error]);

    return { categories, loadingCategories, errorCategories };
};