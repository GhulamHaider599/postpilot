"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import LoginModal from "./LoginModal";




const initialState = {userName : "" , email: "" , password: "", confirmPassword: ""}

const RegisterModal = ({ isOpen, onClose }) => {
    const [state, setState] = useState(initialState)

    const handleChange = (e) =>{
setState(s=>({...s, [e.target.name] : e.target.value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
       let {userName, email, password, confirmPassword} = state
        const userData = {userName, email, password, confirmPassword}
        // console.log('userData', userData)


    // // Check if passwords match
    // if (password !== confirmPassword) {
    //     alert("Passwords do not match!");
    //     return;
    // }

    // // Create userData object
    // const userData = { userName, email, password, confirmPassword };

    // Store the user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Log to confirm it
    console.log('User data saved to localStorage:', userData);


    setState(initialState)
    // Close modal after successful registration
    // onClose();
    }


     const [isLoginOpen, setIsLoginOpen] = useState(false);
    // Close modal when clicking outside of it
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    if (!isOpen) return null; // Hide modal when not open

    return (
      
        <div className="fixed inset-0 bg-black/50   flex justify-center items-center  z-50">
            <Card className="mx-auto max-w-sm relative">
            <button onClick={onClose} className="absolute top-2 right-4 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                    <CardDescription>Enter your credential (i.e username, email and password etc) to create your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input name="userName" value={state.userName} type="text" placeholder="Enter your name" onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" value={state.email} type="email" placeholder="m@example.com" onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input name="password" value={state.password} type="password" onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Confirm Password</Label>
                            <Input name="confirmPassword" value={state.confirmPassword} type="password" onChange={handleChange} required />
                        </div>
                        <Button type="submit" onClick={handleSubmit} className="w-full">
                            Register
                        </Button>
                        <CardDescription>If you already created account then <button onClick={() => setIsLoginOpen(true)} className="text-blue-400">Click here</button></CardDescription>
                        <LoginModal isOpen={isLoginOpen} loginClose={() => setIsLoginOpen(false)} />
                    </div>
                </CardContent>
            </Card>
        </div>




    );
};

export default RegisterModal;