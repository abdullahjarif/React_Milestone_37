import './App.css';
export default function Student({ students }) {
    console.log(students);
    
  return (
    <div style={{
        border: "2px solid green",
        borderRadius: "20px",
        padding: "10px",
        margin: "10px"
    }}>
      <h2 style={{
        color: "yellow"
      }}>Student Details {students.id}</h2>
      <p>Name: {students.name}</p>
      <p>Dept: {students.dept}</p>
      <p>Class: {students.class}</p>
      <p>Marks: {students.marks}</p>
    </div>
  );
}
