// function useState(initialValue) {
//     let state = initialValue;
//     function setState(newValue) {
//         state = newValue;
//         console.log("State updated to:", state);
//     }

import { useState } from "react"

//     return [state, setState];
// }

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleCountAdd = () => {
        // console.log("Add Button Clicked");
        // setCount(5);
        const newCount = count + 1;
        setCount(newCount);
        
    }




    const counterStyle = {
        border: "2px solid yellow",
        borderRadius: "10px",
        textAlign: "center",
        width: "200px",
        margin: "20px auto",
        padding: "20px"
    }
    return(
        <div style={counterStyle}>
            <h3>Counter Component: {count}</h3>
            <button onClick={handleCountAdd}>Increment</button>
        </div>
    )
}
