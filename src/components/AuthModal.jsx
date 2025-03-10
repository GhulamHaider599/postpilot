import PropTypes from "prop-types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const initialState = {username: "", email: "", password: "", confirmPassword: ""}

export default function AuthModal({ open, onClose, type, setAuthType }) {
const [state, setState] = useState(initialState)
const [errorMessage, setErrorMessage] = useState("");

const handleChange = (e)=>{
setState(s=>({...s,[e.target.name] : e.target.value}))
}
const handleSubmit = (e) =>{
e.preventDefault()
const {username, email, password, confirmPassword} = state

if (type === "signup") {
  // Registration logic
  if (password !== confirmPassword) {
    setErrorMessage("Passwords do not match.");
    return;
  }
     // Check if user is already registered
     const existingUser = JSON.parse(localStorage.getItem("userData"));
     if (existingUser && existingUser.email === email) {
       setErrorMessage("User already registered with this email.");
       return;
     }
  const userData = { username, email, password };

  // Store user data in localStorage
  localStorage.setItem("userData", JSON.stringify(userData));

  setState(initialState);
  setErrorMessage("");
  alert("Registration successful! You can now log in.");
} else if (type === "login") {
  // Login logic
  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
    setState(initialState);
    setErrorMessage("");
    alert("Login successful!");
    onClose()
  } else {
    setErrorMessage("Invalid email or password.");
  }
}
 

// const userData = {username, email, password, confirmPassword}
// console.log('userData', userData)
// setState(initialState)
}
 // Disable closing the modal with "X" or outside click by preventing onOpenChange event
 const handleModalClose = (isOpen) => {
  if (!isOpen) return; // Prevent closing the modal until login/register success
};

  return (
    <Dialog open={open} onOpenChange={handleModalClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{type === "login" ? "Login" : "Register"}</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          {type === "signup" && (
            <label className="block">
              Username
              <input type="text" name="username"  value={state.username} onChange={handleChange} placeholder="Username" className="w-full p-2 border rounded" />
            </label>
          )}
          <label className="block">
            Email
            <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
          </label>
          <label className="block">
            Password
            <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password" className="w-full p-2 border rounded" />
          </label>
          {type === "signup" && (
            <label className="block">
              Confirm Password
              <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full p-2 border rounded" />
            </label>
          )}
           {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" onClick={handleSubmit}>
            {type === "login" ? "Login" : "Register"}
          </button>
        </form>
        {/* Switch Between Login and Signup */}
        <div className="text-center mt-4">
          {type === "login" ? (
            <p>
              Don't have an account?{" "}
              <button onClick={() => setAuthType("signup")} className="text-blue-500 underline">
                Register here
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button onClick={() => setAuthType("login")} className="text-blue-500 underline">
                Login here
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
// :white_check_mark: Add PropTypes
AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["login", "signup"]).isRequired,
  setAuthType: PropTypes.func.isRequired, // Add this prop for switching forms
};





