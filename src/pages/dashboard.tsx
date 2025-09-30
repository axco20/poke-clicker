import PokeballClicker from "@/components/PokeballClicker";
import { TopBanner } from "@/components/TopBanner";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Shop", "Upgrades", "Collection", "Stats"]


export function Dashboard() {
  const [active, setActive] = useState("Shop")
  return (
    <div
      className="h-screen bg-slate-800 w-full text-white flex flex-col overflow-x-hidden"
    >
      <TopBanner />
      <div className="flex w-full flex-1">
        <PokeballClicker/>
        <div className="w-[65%] border-l-10 border-black/90">
          <div className="w-full h-[10%] flex overflow-x-hidden bg-black/30">
              {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="relative flex-1 px-2 py-3 text-white font-press text-3xl font-medium text-center cursor-pointer hover:text-white/60"
            >
            {tab}
            {active === tab && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[4px] bg-red-500"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
