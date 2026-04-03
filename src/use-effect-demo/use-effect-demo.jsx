import { use, useEffect } from 'react';
import ProductList from './product-list';


export default function UseEffectDemo(props) {
    useEffect(() => {
        console.log('inside useEffect');

        const callPizzaPromise = async () => {
            try {
                const res = await pizzaPromise
                console.log('promise resolved: ', res);
                 // hangling the successful resolve
                 // 50 lines of code

            } catch (error) {
                // handling the error
                console.log('Error: ', error);
            }
        }

        // pizzaPromise
        // .then((res) => {
        //     console.log('promise resolved: ', res);
        //     // hangling the successful resolve
        //     // 50 lines of code
        // })
        // .catch((error) => {
        //     // handling the error
        //     console.log('Error: ', error);
        // });

        console.log('promise called');
        callPizzaPromise();

    }, []);
    console.log('renderinggg...');
    return (
        <div>
            <h1>Let's use try Promises</h1>
            <ProductList />
        </div>
    )
}

const isDoughtAvailable = true;

const pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isDoughtAvailable) {
            resolve('Here is your pizza. Enjoy!');
        } else {
            reject('Sorry, we are out of dough.');
        }
    }, 5000);
});
