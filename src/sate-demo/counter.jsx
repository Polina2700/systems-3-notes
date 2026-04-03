// we need to import the useState hook from the react library in order to use it in our component.
// useState is a hook that allows us to add state to our functional components.
import { use, useState } from 'react'

function Counter() {

    // it is the initial state of our component. It is an object that contains the count and input properties. 
    // The count property is initialized to 0 and the input property is initialized to an empty string.
    const initialState = {
        count: 0,
        input: ''
    }



    const [state, setState] = useState(initialState);
    // it returns an array


    // It returns an array with two elements: the current state value and a function to update that state value.
    // const [count, setCount] = useState(0);
    // const [input, setInput] = useState('');

    // childish way of writing the above code
    // const arr = useState();
    // const count = arr[0];
    // const setCount = arr[1];

    // it is handleClick function that will be called when the button is clicked. It will update the count state by incrementing it by 1.
    const handleClick = () => {

        // const newState = {...state}
        // newState.count = newState.count + 1;

        setState({...state, count: state.count + 1}); 

    }

    return (
        <div>
            <button onClick={() => handleClick()}>Click me</button>
            <p>You clicked me {state.count} times</p> {/* process of putting curly braces is called "binding" */}
            {/* <input type ='text' onChange={(evn)=>setInput(evn.target.value)}/> */}
            <input type ='text' onChange={({
                target: {
                    value: input 
                } = {}
            }) => setState({...state, input})} />
            <p>{state.input}</p>
        </div>
    )
}

export default Counter;