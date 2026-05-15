import { useStore } from "../store/StoreProvider";

export default function StoreCounter(props) {
    const [store, dispatch] = useStore();
    const handleIncrement = () => {
        dispatch({
            type: "INCREMENT-count"
        });
    }

    const handleDecrement = () => {
        dispatch({
            type: "DECREMENT-count"
        });
    }

    return (
        <div>
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>
            <br />
            {store.counterValue}        
        </div>
    )
}