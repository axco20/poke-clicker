import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 1.05,
    y: -20,
  },
};

const pageTransition = {
  duration: 0.4,
};

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="bg-black min-h-screen">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="h-screen"
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="min-h-screen"
                >
                  <Dashboard />
                </motion.div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
