import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "30px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#333", textAlign: "center" }}>
        Team Task Manager
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Dashboard</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#4CAF50",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h3>Total Tasks</h3>
            <p>{tasks.length}</p>
          </div>

          <div
            style={{
              background: "#2196F3",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h3>Completed</h3>
            <p>
              {
                tasks.filter((task) => task.status === "Completed").length
              }
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Tasks</h2>

          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title} - {task.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;