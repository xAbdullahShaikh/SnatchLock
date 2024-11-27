import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image"; // Import Image from next/image

const snatch = "/sklogo.png"; // Correct path for image if it's in the public folder

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");

  // Function to generate a simple captcha
  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedCaptcha(result);
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaValue !== generatedCaptcha) {
      alert("Captcha does not match. Please try again!");
      return;
    }
    console.log("Login submitted");
    // Add your login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Add Image Above the Login Title */}
        <div className="flex justify-center mb-4">
          <Image
            src={snatch} // Ensure this path is correct
            alt="Snatchlock Logo"
            width={200}   // Adjust the width as needed
            height={170}  // Adjust the height as needed
            className="w-46 h-38" // You can also control size with Tailwind
          />
        </div>

        <Card className="w-full max-w-md bg-zinc-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-cyan-400">
              Login
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
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
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
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
              </div>

              {/* Captcha Input */}
              <div className="space-y-2">
                <Label htmlFor="captcha" className="text-zinc-400">
                  Captcha
                </Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="captcha"
                    type="text"
                    placeholder="Enter captcha"
                    value={captchaValue}
                    onChange={(e) => setCaptchaValue(e.target.value)}
                    required
                    aria-label="Captcha Input"
                    className="bg-zinc-700 border-zinc-600 text-white flex-grow"
                  />
                  <div className="bg-zinc-700 px-3 py-2 rounded text-cyan-400 font-bold">
                    {generatedCaptcha}
                  </div>
                  <Button
                    type="button"
                    onClick={generateCaptcha}
                    variant="outline"
                    size="icon"
                    className="bg-zinc-700 border-zinc-600 text-cyan-400 hover:bg-zinc-600 focus:ring focus:ring-cyan-500"
                    aria-label="Refresh Captcha"
                  >
                    <RefreshCw size={18} />
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-zinc-900 transition-colors"
              >
                Login
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <a href="#" className="text-cyan-400 hover:underline">
              Forgot password?
            </a>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
