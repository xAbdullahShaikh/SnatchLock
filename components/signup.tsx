import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image"; // Import Image from next/image

//const snatch = "/snatch.png"; // Correct path for image if it's in the public folder
const sk = "/sklogo.png";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform sign-up logic here
    console.log("Signup submitted with:", { username, email, password });
    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Add Image Above the Signup Title */}
        <div className="flex justify-center mb-4">
          <Image
            src={sk} // Ensure this path is correct
            alt="Snatchlock Logo"
            width={200}   // Adjust the width as needed
            height={170}  // Adjust the height as needed
            className="w-46 h-38" // You can also control size with Tailwind
          />
        </div>

        <Card className="w-full max-w-md bg-zinc-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-cyan-400">
              Sign Up
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <Label htmlFor="username" className="text-zinc-400">
                  Username
                </Label>
                <div className="relative">
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    required
                    aria-label="Username"
                    className="bg-zinc-700 border-zinc-600 text-white pl-10"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-zinc-400">
                  Email
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    aria-label="Email"
                    className="bg-zinc-700 border-zinc-600 text-white pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <Label htmlFor="password" className="text-zinc-400">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    aria-label="Password"
                    className="bg-zinc-700 border-zinc-600 text-white pl-10 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 focus:outline-none"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-zinc-900 transition-colors"
                >
                  Sign Up
                </Button>
              </motion.div>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-cyan-400">
              Already have an account?{" "}
              <a href="#" className="hover:underline text-cyan-400" onClick={() => alert("Switch to login form")}>
                Login
              </a>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
