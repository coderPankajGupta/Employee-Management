import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            className="border-2 placeholder:text-gray-500 bg-transparent outline-none border-emerald-600 text-xl rounded-full py-2 px-5"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            className="border-2 placeholder:text-gray-500 
            mt-2 bg-transparent outline-none border-emerald-600 text-xl rounded-full py-2 px-5"
            placeholder="Enter your password"
          />
          <button
            className="border-2 border-none placeholder:text-white 
            mt-10 text-emerald outline-none bg-emerald-600 
            text-lg rounded-full py-2 px-8 font-semibold w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
