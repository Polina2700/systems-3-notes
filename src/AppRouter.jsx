import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Counter from "./sate-demo/counter";
import UseEffectDemo from "./use-effect-demo/use-effect-demo";
import StoreCounter from "./store-demo/StoreCounter";

export default function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/use-effect-demo" element={<UseEffectDemo />} />
                <Route path="/store-counter" element={<StoreCounter />} />
            </Routes>
        </BrowserRouter>
    )
}