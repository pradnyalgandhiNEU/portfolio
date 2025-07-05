import React from "react";

interface Props {
  title: string;
  role: string;
  duration: string;
  points: string[];
}
const ExperienceCard: React.FC<Props> = ({ title, role, duration, points }) => {
  return (
    <div className="mb-6 bg-gray-950 border border-gray-500 from-black  to-gray-200 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl bg p-4 rounded-lg shadow-md group">
      <div className="flex justify-between items-center text-md text-gray-200 font-medium mb-1">
        <span>{title}</span>
        <span className="text-gray-500">
          <i>{duration}</i>
        </span>
      </div>
      <div className="italic text-sm text-gray-200 mb-2">{role}</div>

      <div className="h-2 w-full bg-gray-200 rounded mb-2">
        <div className="h-full bg-blue-500 rounded w-full group-hover:bg-indigo-500 transition-all duration-300"></div>
      </div>

      <ul className="list-disc pl-5 mt-2 text-sm text-gray-400 space-y-1">
        {points.map((point, idx) => (
          <li
            key={idx}
            className="transition-all duration-300 group-hover:text-gray-200"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
