import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = (props) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let regobj = { id, name, email, pass };
    if (IsValidate()) {
      try {
        console.log(regobj);
        const response = await fetch("http://localhost:8000/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(regobj),
        });
        if (response.ok) {
          alert("Registered successfully.");
          navigate("/login");
        } else {
          throw new Error("Registration failed");
        }
      } catch (err) {
        alert("Failed");
      }
    }
  };

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter a value in ";
    if (email === null || email === "") {
      isproceed = false;
      alert(errormessage + "Email");
    }
    if (id === null || id === "") {
      isproceed = false;
      alert(errormessage + "username");
    }
    if (pass === null || pass === "") {
      isproceed = false;
      alert(errormessage + "Password");
    }
    if (name === null || name === "") {
      isproceed = false;
      alert(errormessage + "Name");
    }
    return isproceed;
  };

  return (
    <div className="log">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full name"
          />
          <label htmlFor="name">Username</label>
          <input
            value={id}
            name="name"
            onChange={(e) => setId(e.target.value)}
            id="name"
            placeholder="Username"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Register</button>
        </form>
        <Link to="/login" className="link-btn">
          Already have an account? Login here.
        </Link>
      </div>
    </div>
  );
};
