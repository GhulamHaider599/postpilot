"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import RegisterModal from "./RegisterModal";






const LoginModal = ({ isOpen, onClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);


    const handleLogin = (e) => {
        e.preventDefault();

        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
            // If user credentials match, allow them to access the website
            setLoginError(false);
            // Here, you can update the UI or navigate the user to the main page
           onClose(); // Close the login modal
            localStorage.setItem('isLoggedIn', true); // Track user login status

alert("Congratulation! you logged in")

        } else {
            // If credentials do not match, show error
            setLoginError(true);
            alert("Email or password is incorrect")
        }
        setEmail("")
        setPassword("")
    };

    // useEffect(() => {
    //     // Check if the user is already logged in, based on localStorage
    //     const isLoggedIn = localStorage.getItem('isLoggedIn');
    //     if (isLoggedIn) {
    //         // Skip the login modal if user is already logged in
    //         onClose();
    //     }
    // }, [onClose]);



    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
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
    
        const handleCreateAccountClick = () => {
            // const isOpen = true
            // setIsRegisterOpen(true);
           onClose();  // Close the Login modal when "Create Account" is clicked
        };

    return (
     
        <div className="fixed inset-0 bg-black/50   flex justify-center items-center  z-50">
            <Card className="mx-auto max-w-sm relative">
            <button onClick={onClose} className="absolute top-2 right-4 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email and password to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <Button type="submit" className="w-full" onClick={handleLogin} >
                            Login
                            {/* {loginError && <p className="text-red-500">Invalid email or password.</p>} */}
                        </Button>
                        <CardDescription>If you don't have an account then <button className="text-blue-400" onClick={handleCreateAccountClick}  >Create Account</button></CardDescription>
                        <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginModal;


