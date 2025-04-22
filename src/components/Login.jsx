import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { Context } from "../../Context/MainContext";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../FirebaseConfig";

export default function Login() {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
  
    // Basic validation
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
  
    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
  
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User login successfully");
        setUser(user.accessToken);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid email or password");
      });
  };
  

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setUser(user.accessToken);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="flex items-center justify-center p-5 min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 border border-gray-800">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form onSubmit={loginUser}>
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
            Login
          </button>
          <button
            onClick={loginWithGoogle}
            type="button"
            className="w-full bg-gray-600 text-white py-2 mt-3 rounded-lg hover:bg-gray-700 transition"
          >
            Login with Google
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?
          <Link to={"/register"} className="text-gray-900 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
