// components/DashboardLayout.tsx

import Sidebar from "../components/sidebar";
import { motion } from "framer-motion";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-900 text-gray-300 p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-full mx-auto"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardLayout;
