import { useLogout } from "@/hooks/useAuth";
import { useToast } from "@/context/useToast";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import background from "@/assets/background.gif";
import { LogOut } from "lucide-react";

function Dashboard() {
  const logoutMutation = useLogout();
  const { success } = useToast();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      success("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen bg-cover bg-center bg-no-repeat  w-full text-white gap-8"
    >
      <div className="min-h-[5%]  flex bg-black/90 justify-between items-center">
        <button className="cursor-pointer">
          <Avatar className="size-[40px] ml-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>

        <div className="text-4xl font-press px-4 py-2 rounded-lg">
          Poke-Clicker!
        </div>
        <button className="mr-2 cursor-pointer" onClick={handleLogout}>
          <LogOut />
        </button>
      </div>
      <div className="flex w-full">
        <div className="w-[35%] border flex justify-center items-start pt-5"></div>
        <div className="w-[65%] border min-h-screen">hello</div>
      </div>

      {/* <div className="text-4xl font-press">Pokemon Dashboard</div>
      <div className="text-lg font-press">Welcome, Trainer!</div>

      <Button
        onClick={handleLogout}
        variant="outline"
        className="font-press bg-red-700 hover:bg-red-800"
        disabled={logoutMutation.isPending}
      >
        {logoutMutation.isPending ? "Logging out..." : "Logout"}
      </Button> */}
    </div>
  );
}

export default Dashboard;
