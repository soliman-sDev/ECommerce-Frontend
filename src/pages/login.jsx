import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch users.");
        }
        const data = await res.json();
        setUsers(data); 
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setEmail("");
      setPassword("");
      setError("");
      navigate("/allProducts");
    } else {
      setError("Invalid email or password."); 
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex items-center mb-6 space-x-2">
          <FaArrowLeft
            onClick={goToHome}
            className="transform hover:-translate-x-1 transition-transform duration-300 cursor-pointer"
          />
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-slate-900"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-800 transition">
            Login
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <span className="text-slate-900 font-semibold">Can't Access</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
