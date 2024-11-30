"use client";

import { motion } from "framer-motion";
import MainProject from "./main-project";
import ProjectGrid from "./project-grid";

export default function MainPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MainProject />
      <ProjectGrid />
    </motion.div>
  );
}
