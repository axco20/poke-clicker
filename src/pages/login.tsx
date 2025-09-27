import pokeball from "@/assets/pokeball.gif";
import background from "@/assets/background.gif";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, LockKeyhole } from "lucide-react";

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <div className=" rounded w-[35%] h-[60%] text-white flex flex-col bg-black/60">
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
          <div className="border-b-2 flex items-center align-center justify-center gap-2">
            <LockKeyhole />
            <Input
              className=" font-press text-xs border-0 ring-0 focus:border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none shadow-none"
              type="email"
              placeholder="Enter password..."
            />
          </div>
          <Button variant="outline" className="w-[60%] font-press bg-green-700">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
