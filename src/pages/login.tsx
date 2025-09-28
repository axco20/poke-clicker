import pokeball from "@/assets/pokeball.gif";
import background from "@/assets/background.gif";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, LockKeyhole, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useLogin, useSignUp } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { useToast } from "@/context/useToast";
function Login() {
  const [view, setView] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const signUpMutation = useSignUp();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginMutation.mutateAsync({ email, password });
      toast.success("Login Successful! Welcome Back Trainer!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login Failed. Invalid Credentials or Create New Account!");
      console.error("Login failed:", error);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUpMutation.mutateAsync({ email, password });
      toast.success("New Trainer Created! Please login!");
      setView("login");
    } catch (error) {
      toast.success("Signup Failed. Try Again Shortly.");
      console.error("Sign up failed:", error);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <div className="rounded w-[35%] h-[60%] text-white flex flex-col bg-black/60 overflow-auto">
        {view === "forgot" && (
          <div className=" w-full h-full align-center justify-center items-center flex flex-col gap-10 mb-10">
            <img src={pokeball} alt="Pokeball" className="w-24 h-24" />
            <div className="flex flex-col items-center text-center">
              <div className="text-2xl font-press">Forgot Password</div>
              <div className="text-[8px] font-press m-2">
                Enter your email and we'll send you a link to reset your
                password.
              </div>
            </div>

            <div className="border-b-2 flex items-center align-center justify-center gap-2">
              <Mail />
              <Input
                className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
                type="email"
                placeholder="Enter email..."
              />
            </div>

            <Button
              variant="outline"
              className="w-[60%] font-press bg-green-700 hover:bg-green-800 cursor-pointer"
            >
              Send Email
            </Button>
            <button
              className="text-[10px] font-press hover:text-white/80 cursor-pointer flex items-center gap-2"
              onClick={() => setView("login")}
            >
              <ChevronLeft />
              Back to Login
            </button>
          </div>
        )}
        {view === "login" && (
          <form
            onSubmit={handleLogin}
            className="w-full h-full align-center justify-center items-center flex flex-col gap-10 mb-10"
          >
            <img src={pokeball} alt="Pokeball" className="w-24 h-24" />
            <div className="text-2xl font-press">Welcome Trainer!</div>
            <div className="border-b-2 flex items-center align-center justify-center gap-2">
              <Mail />
              <Input
                className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
                type="email"
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="border-b-2 flex items-center justify-center gap-2">
                <LockKeyhole />
                <Input
                  className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
                  type="password"
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="button"
                className="text-[8px] font-press hover:text-white/80 cursor-pointer m-1"
                onClick={() => setView("forgot")}
              >
                Forgot Password?
              </button>
            </div>
            <Button
              type="submit"
              variant="outline"
              className="w-[60%] font-press bg-green-700 hover:bg-green-800 cursor-pointer"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </Button>
            <button
              type="button"
              className="text-[10px] font-press hover:text-white/80 cursor-pointer"
              onClick={() => setView("signup")}
            >
              Don't have an account? Register now!
            </button>
          </form>
        )}

        {view === "signup" && (
          <form
            onSubmit={handleSignUp}
            className="w-full h-full align-center justify-center items-center flex flex-col gap-10 mb-10"
          >
            <img src={pokeball} alt="Pokeball" className="w-24 h-24" />
            <div className="text-2xl font-press">New Trainer!</div>
            <div className="border-b-2 flex items-center align-center justify-center gap-2">
              <Mail />
              <Input
                className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
                type="email"
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="border-b-2 flex items-center justify-center gap-2">
                <LockKeyhole />
                <Input
                  className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
                  type="password"
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              variant="outline"
              className="w-[60%] font-press bg-green-700 hover:bg-green-800 cursor-pointer"
              disabled={signUpMutation.isPending}
            >
              {signUpMutation.isPending ? "Creating..." : "Create Account"}
            </Button>
            <button
              type="button"
              className="text-[10px] font-press hover:text-white/80 cursor-pointer"
              onClick={() => setView("login")}
            >
              Already have an account? Login!
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
