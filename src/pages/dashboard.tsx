import background from "@/assets/background.gif";
import { TopBanner } from "@/components/TopBanner";

function Dashboard() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen bg-cover bg-center bg-no-repeat  w-full text-white gap-8"
    >
      <TopBanner />
      <div className="flex w-full">
        <div className="w-[35%] border flex justify-center items-start pt-5">
          hello
        </div>
        <div className="w-[65%] border min-h-screen">hello</div>
      </div>
    </div>
  );
}

export default Dashboard;
