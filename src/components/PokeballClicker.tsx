import { motion } from "framer-motion";
import { CircleDollarSign } from "lucide-react";

export default function PokeballClicker() {
    return (
        <div className="w-[35%] flex flex-col">
          <div className="w-full h-[10%] flex items-center justify-center bg-black/30">
            <div className="flex gap-2 items-center">
              <CircleDollarSign size={50} className="text-yellow-600 bg-yellow-700 rounded-[50%]"/>
              <div className="font-press text-3xl">1000000</div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-1">
            <motion.button
              whileTap={{ scale: 0.90 }}
              className="h-[50vmin] w-[50vmin] rounded-full border-[3.75vmin] border-black bg-no-repeat bg-[length:100%_100%] bg-[radial-gradient(circle_at_center,white_20%,black_20%,black_30%,transparent_30%),linear-gradient(to_bottom,red_46%,black_46%,black_54%,white_54%)] cursor-pointer">
            </motion.button>
          </div>
        </div> 
    )
}