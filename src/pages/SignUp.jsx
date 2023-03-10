import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate;
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/d018d3cd-2602-44a4-a9e2-5b66e5fef473/ID-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/bg"
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-latar-kon opacity-50"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-16 flex flex-col items-center gap-6">
        <div className="w-full p-6 bg-navbar rounded-lg">
          <h1 className="text-2xl font-semibold mb-6">Sign up</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email or phone number" className="bg-gray-500/25 text-huruf p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-prymary" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="bg-gray-500/25 text-huruf p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-prymary" />
            <button className="bg-prymary text-white py-3 rounded-lg hover:bg-hvr transition-all">Sign Up</button>
          </form>
          <div className="flex items-center gap-2 text-sm mt-4">
            <a href="/" className="text-prymary hover:underline">
              Need help?
            </a>
          </div>
          <div className="text-sm mt-4">
            <span className="text-textsecond">already subscribed to KyOuka? </span>
            <Link to="/Login" className="text-huruf hover:underline hover:text-hvr">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
