import { use, useEffect } from "react";

export default function ProductList(props) {

    useEffect(() => {

    const loadProducts = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products?limit=5');
            const {products} = await res.json();
            console.log('Products: ', products);
        } catch(err){
            console.log('Error: ', err);
        }   
    } 
    
    loadProducts();

    }, []);

    return (
        <div>
            Product
        </div>
    )
}   
        
