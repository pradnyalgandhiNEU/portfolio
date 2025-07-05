import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Simplify",
    description:
      "A React application for tracking expense and task lists for roommates with charts and dashboards",
    image: "/img/simplify.png",
    tech: "Web Application",
    date: "Oct 2021",
  },
  {
    title: "Simplify iOS",
    description:
      "An iOS application built with SwiftUI for tracking Expenses and ToDo lists using SwiftUI and Springboot",
    image: "/img/iOS.png",
    tech: "iOS App",
    date: "March 2022 - May 2022",
  },
  {
    title: "CI CD with terraform",
    description:
      "A CI/CD pipeline built in terraform to launch EC2 instances that populates RDS, S3 buckets to launch custom website",
    image: "/img/AWS.jpeg",
    tech: "DevOps",
    date: "Feb 2023 - April 2022",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-16 px-10 md:px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold text-white mb-2">Projects</h3>
        <div className="mt-4 w-16 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden justify-evenly min-h-64 flex flex-col"
          >
            <div className="aspect-[4/3] relative w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="text-sm text-gray-400 mt-auto flex justify-between items-center">
                <span>{project.tech}</span>
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
