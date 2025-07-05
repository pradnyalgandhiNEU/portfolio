"use client";
import React from "react";
import SkillsCard from "./SkillsCard";

const skills = [
  {
    iconClass: "ion-code-working",
    title: "Full Stack Development",
    description:
      "Expertise with JavaScript, Node, SQL and frameworks like React and Next JS",
  },
  {
    iconClass: "ion-monitor",
    title: "Web Design",
    description:
      "UI/UX Designer with experience in Adobe XD, Figma and prototyping.",
  },
  {
    iconClass: "ion-cloud",
    title: "Cloud",
    description:
      "Experience with AWS and Azure cloud, serverless functionality and deployment",
  },
  {
    iconClass: "ion-iphone",
    title: "Mobile Development",
    description:
      "iOS enthusiast with experience in building iOS applications in Swift",
  },
  {
    iconClass: "ion-fork-repo",
    title: "Version Control",
    description:
      "Efficient in building CI/CD pipelines with GitHub and version control",
  },
  {
    iconClass: "ion-camera",
    title: "Photography",
    description:
      "Hobby and a side hustle with some professional graduation and party gigs",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 max-w-6xl mx-auto px-10 md:px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-200">Skill Set</h2>
        <div className="mt-4 mx-auto w-20 h-1 bg-indigo-600 rounded"></div>
      </div>

      <div className="flex flex-wrap -mx-4">
        {skills.map((skill, index) => (
          <SkillsCard
            key={skill.title}
            iconClass={skill.iconClass}
            title={skill.title}
            description={skill.description}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
