import React from "react";
import { motion } from "framer-motion";

interface Props {
  iconClass: string;
  title: string;
  description: string;
  delay: number;
}
const SkillsCard: React.FC<Props> = ({
  iconClass,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      className="w-full md:w-1/2 lg:w-1/3 p-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 text-center">
        <div className="flex justify-center items-center mb-4">
          <span className="text-4xl text-indigo-600">
            <i className={iconClass}></i>
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
