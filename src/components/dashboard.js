// src/components/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Welcome, {username}!</h2>
        <button onClick={handleLogout} className="btn btn-danger w-100 py-2">Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
