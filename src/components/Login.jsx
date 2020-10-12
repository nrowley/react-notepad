import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="container w-25" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" ref={register({ required: "Email address required" })} />
        {errors.email && (
          <div className="alert alert-danger fade show mt-1" role="alert">
            {errors.email.message}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" ref={register({ required: "Username required" })} />
        {errors.username && (
          <div className="alert alert-danger fade show mt-1" role="alert">
            {errors.username.message}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter password"
          ref={register({ minLength: { value: 8, message: "Password must be atleast 8 characters" }, required: "Password required" })}
        />
        {errors.password && (
          <div className="alert alert-danger fade show mt-1" role="alert">
            {errors.password.message}
          </div>
        )}
      </div>
      <div className="form-group row justify-content-center">
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}
