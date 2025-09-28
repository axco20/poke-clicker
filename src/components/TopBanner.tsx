import { LogOut } from "lucide-react";
import { AvatarImage, Avatar, AvatarFallback } from "./ui/avatar";
import { useLogout } from "@/hooks/useAuth";
import { useToast } from "@/context/useToast";

export function TopBanner() {
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
  );
}
