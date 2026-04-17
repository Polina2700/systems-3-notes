import { use, useEffect } from "react";

export default function ProductList(props) {

    const initState = {
        products: [],
        clicksCount: 2,
    }

    const [state, setState] = use(initState);

    useEffect(() => {

    const loadProducts = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products?limit=5'); //fetch return promise and we need to wait for it to resolve, so we use await
            const {products} = await res.json();
            console.log('Products: ', products);
            setState({
                ...state, 
                products})

        } catch(err){
            console.log('Error: ', err);
        }   
    } 
    
    loadProducts();

    }, []);
    return (
        <div>
            <h1>Product List</h1>
            {
                state.products.map(({id, title}) => <div key={id}>{title}</div>)
            }
        </div>
    )
}   
        
