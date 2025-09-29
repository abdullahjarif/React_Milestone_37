// destructuring props
//

export default function ToDo({ task, isDone, time=0 }) {
  if (isDone === true) {
    return (
      <div
        style={{
          border: "2px solid orange",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <li
          style={{
            color: "orange",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Task: {task} <br />
          duration: {time} mins
        </li>
        <li>Status: {isDone ? "Done" : "Pending"}</li>
      </div>
    );
  }
  return <li style={{
    color: "red",
    fontSize: "15px"
  }}>Pending: {task}</li>;



//   else{
//     return(
//         <li style={{
//             color: "red",
//             fontSize: "12px"
//         }}>Pending: {task}</li>
//     );
//   }
}

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
