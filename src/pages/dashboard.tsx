import { useLogout } from "@/hooks/useAuth";
import { useToast } from "@/context/useToast";
import { Button } from "@/components/ui/button";

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
    <div className="h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-8">
      <div className="text-4xl font-press">Pokemon Dashboard</div>
      <div className="text-lg font-press">Welcome, Trainer!</div>

      <Button
        onClick={handleLogout}
        variant="outline"
        className="font-press bg-red-700 hover:bg-red-800"
        disabled={logoutMutation.isPending}
      >
        {logoutMutation.isPending ? "Logging out..." : "Logout"}
      </Button>
    </div>
  );
}

export default Dashboard;
