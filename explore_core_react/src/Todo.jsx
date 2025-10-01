// destructuring props
//

// export default function ToDo({ task, isDone, time=0 }) {
//   if (isDone === true) {
//     return (
//       <div
//         style={{
//           border: "2px solid orange",
//           borderRadius: "10px",
//           padding: "10px",
//           margin: "10px",
//         }}
//       >
//         <li
//           style={{
//             color: "orange",
//             fontWeight: "bold",
//             fontSize: "20px",
//           }}
//         >
//           Task: {task} <br />
//           duration: {time} mins
//         </li>
//         <li>Status: {isDone ? "Done" : "Pending"}</li>
//       </div>
//     );
//   }
//   return <li style={{
//     color: "red",
//     fontSize: "15px"
//   }}>Pending: {task}</li>;

//   else{
//     return(
//         <li style={{
//             color: "red",
//             fontSize: "12px"
//         }}>Pending: {task}</li>
//     );
//   }

// export default function ToDo(props) {
//     // props.task = "Learn JavaScript"; --> Cannot assign to read only property 'task' of object
//     // props are read-only
//     // props are immutable (nearest 100% true)
//   return (
//     <div>
//       <li style={{
//         color: "orange",
//         fontWeight: "bold",
//         fontSize: "20px"
//       }}>Task: {props.task}</li>
//     </div>
//   );
// }

// conditional rendering: operation 03 ternary
// condtion? true : false

// export default function ToDo({task, isDone, time=0}) {
//   return isDone ? <li>Task: {task} <br /> duration: {time} mins</li> : <li>Pending: {task}</li>
// }

// conditional rendering: operation 04 && operator
// export default function ToDo({task, isDone, time=0}) {
//   return isDone && <li>Task: {task} <br /> duration: {time} mins</li>;
// }

// conditional rendering: operation 05 || operator
// export default function ToDo({task, isDone, time=0}) {
//   return isDone || <li>Pending: {task} <br /> duration: {time} mins</li>;
// }

export default function ToDo({ task, isDone, time }) {
  // const displayTime = time ? time : 100;
  let listItem;
  if (isDone === true) {
    listItem = (
      <li>
        <span style={{ color: "green" }}>Done: {task}</span>
        <br /> Completion Status: {time ? "I am done" : "Not done yet"} 
      </li>
    );
    // return <li>
    //   <span style={{color: "green"}}>Done: {task}</span>
    //   <br /> duration: {time} mins</li>;
  } else {
    listItem = (
      <li>
        <span style={{ color: "red" }}>Pending: {task} </span> <br />
        Completion Status: {time ? "I am done" : "Not done yet"}
      </li>
    );
  }
  return listItem;
}
