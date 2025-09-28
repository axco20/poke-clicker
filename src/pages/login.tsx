import pokeball from "@/assets/pokeball.gif";
import background from "@/assets/background.gif";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, LockKeyhole, ChevronLeft } from "lucide-react";
import { useState } from "react";

function Login() {
  const [view, setView] = useState("login");

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <div className="rounded w-[35%] h-[60%] text-white flex flex-col bg-black/60">
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
          <div className=" w-full h-full align-center justify-center items-center flex flex-col gap-10 mb-10">
            <img src={pokeball} alt="Pokeball" className="w-24 h-24" />
            <div className="text-2xl font-press">Welcome Trainer!</div>
            <div className="border-b-2 flex items-center align-center justify-center gap-2">
              <Mail />
              <Input
                className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
                type="email"
                placeholder="Enter email..."
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="border-b-2 flex items-center justify-center gap-2">
                <LockKeyhole />
                <Input
                  className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
                  type="email"
                  placeholder="Enter password..."
                />
              </div>
              <button
                type="button"
                className="text-[8px] font-press hover:text-white/80 cursor-pointer m-1"
                onClick={() => setView("forgot")}
              >
                Forgot Passcode?
              </button>
            </div>
            <Button
              variant="outline"
              className="w-[60%] font-press bg-green-700 hover:bg-green-800 cursor-pointer"
            >
              Login
            </Button>
            <button
              className="text-[10px] font-press hover:text-white/80 cursor-pointer"
              onClick={() => setView("signup")}
            >
              Don't have an account? Register now!
            </button>
          </div>
        )}

        {view === "signup" && (
          <div className=" w-full h-full align-center justify-center items-center flex flex-col gap-10 mb-10">
            <img src={pokeball} alt="Pokeball" className="w-24 h-24" />
            <div className="text-2xl font-press">New Trainer!</div>
            <div className="border-b-2 flex items-center align-center justify-center gap-2">
              <Mail />
              <Input
                className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
                type="email"
                placeholder="Enter email..."
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="border-b-2 flex items-center justify-center gap-2">
                <LockKeyhole />
                <Input
                  className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
                  type="email"
                  placeholder="Enter password..."
                />
              </div>
            </div>
            <Button
              variant="outline"
              className="w-[60%] font-press bg-green-700 hover:bg-green-800 cursor-pointer"
            >
              Create Account
            </Button>
            <button
              className="text-[10px] font-press hover:text-white/80 cursor-pointer"
              onClick={() => setView("login")}
            >
              Already have an account? Login!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
