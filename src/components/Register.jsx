import React from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../FirebaseConfig";
import toast from "react-hot-toast";

export default function Register() {
  const registerUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    // Empty field check
    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Name should contain only letters and spaces
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      toast.error("Name should contain only letters");
      return;
    }

    // Name length check
    if (name.length < 3) {
      toast.error("Name should be at least 3 characters long");
      return;
    }

    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Password length check
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("User created successfully");
        // Clear form inputs
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="flex items-center justify-center p-5 min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 border border-gray-800">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Register
        </h2>
        <form onSubmit={registerUser}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              pattern="[A-Za-z\s]{3,}"
              title="Name must contain only letters and be at least 3 characters long"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?
          <Link to={"/login"} className="text-gray-900 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
