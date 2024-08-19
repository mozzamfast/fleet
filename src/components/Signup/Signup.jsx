import React from "react";

const signup = () => {
  return (
    <div>
      <div className="form-background flex flex-col">
        <form className="flex flex-col bg-slate-300">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
        </form>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
};

export default signup;
