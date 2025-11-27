import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => (
  <div className="section-header">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-title"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "60px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="section-divider"
    />
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="section-subtitle"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionTitle;
