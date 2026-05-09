import React from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [tasks, setTasks] = React.useState([
    {
      title: "Create Login Page",
      status: "Completed",
      assignedTo: "Priyanshi",
    },
    {
      title: "Build Dashboard",
      status: "In Progress",
      assignedTo: "Rahul",
    },
    {
      title: "Connect Backend APIs",
      status: "Pending",
      assignedTo: "Admin",
    },
  ]);

  const [taskTitle, setTaskTitle] = React.useState("");
  const [assignedTo, setAssignedTo] = React.useState("");

  const [projectName, setProjectName] = React.useState("");

  const [projects, setProjects] = React.useState([
    "Website Redesign",
    "Mobile App",
  ]);

  const [teamMembers] = React.useState([
    "Priyanshi",
    "Rahul",
    "Sneha",
  ]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddTask = () => {
    if (taskTitle === "" || assignedTo === "") {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      title: taskTitle,
      status: "Pending",
      assignedTo: assignedTo,
    };

    setTasks([...tasks, newTask]);

    setTaskTitle("");
    setAssignedTo("");
  };

  const handleAddProject = () => {
    if (projectName === "") {
      alert("Enter project name");
      return;
    }

    setProjects([...projects, projectName]);
    setProjectName("");
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "Completed"
  ).length;

  return isLoggedIn ? (
    <div className="main-container">
      <div className="dashboard">
        <h1 className="title">Team Task Manager</h1>

        <div className="top-bar">
          <div>
            <h2>Admin Panel</h2>
            <p>Role: Admin</p>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="cards">
          <div className="card green">
            <h2>Total Tasks</h2>
            <p>{tasks.length}</p>
          </div>

          <div className="card blue">
            <h2>Completed</h2>
            <p>{completedTasks}</p>
          </div>

          <div className="card red">
            <h2>Pending</h2>
            <p>{pendingTasks}</p>
          </div>
        </div>

        <div className="task-box">
          <h2>Project Management</h2>

          <div className="task-form">
            <input
              type="text"
              placeholder="New Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />

            <button onClick={handleAddProject}>
              Add Project
            </button>
          </div>

          <div style={{ marginTop: "20px" }}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  background: "#e2e8f0",
                  padding: "12px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                📁 {project}
              </div>
            ))}
          </div>
        </div>

        <div className="task-box">
          <h2>Create Task</h2>

          <div className="task-form">
            <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Assign To"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />

            <button onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>

        <div className="table-box">
          <h2>Task List</h2>

          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Assigned To</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.title}</td>
                  <td>{task.status}</td>
                  <td>{task.assignedTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="table-box"
          style={{ marginTop: "30px" }}
        >
          <h2>Team Members</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {teamMembers.map((member, index) => (
                <tr key={index}>
                  <td>{member}</td>
                  <td>
                    {index === 0 ? "Admin" : "Member"}
                  </td>
                  <td>Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcome Back 👋</h1>

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default App;