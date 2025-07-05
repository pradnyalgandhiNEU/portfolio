import React from "react";
import ExperienceCard from "./ExperienceCard";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-16 mx-auto grid items-center">
      <h3 className="text-3xl font-semibold mx-auto text-gray-200 mb-12">
        Work Experience
        <div className="mt-4 w-16 h-1 bg-blue-500 mx-auto"></div>
      </h3>
      <div className=" rounded-lg shadow-lg p-8 container mx-auto px-4 border border-gray-300">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/5 w-full">
            <img
              src={"/img/profile.jpg"}
              alt="Profile"
              className="rounded-lg shadow-lg w-full object-cover "
            />

            {/* About Me */}
            <div className="mt-8 text-gray-200 grid grid-row gap-4 bg-gray-950 rounded-lg p-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl md:text-3xl p-0 m-0 font-semibold">
                  Pradnyal Gandhi
                </h3>
                <p className="text-gray-500 italic">
                  Software Engineer @ Shelfmark
                </p>
              </div>

              <div className="leading-relaxed flex justify-between">
                <p className="text-gray-100">Email: </p>
                <p className="text-gray-500">pradnyal.gandhi1997@gmail.com</p>
              </div>
              <div className="leading-relaxed flex justify-between">
                <p className="text-gray-100">Location: </p>
                <p className="text-gray-500">Pittsburgh, PA</p>
              </div>
              <div className="flex flex-row gap-2 justify-end">
                <Link href="https://www.linkedin.com/in/pradnyal-gandhi">
                  <i className="ion-social-linkedin text-4xl"></i>
                </Link>
                <Link href="https://github.com/pradnyalgandhiNEU">
                  <i className="ion-social-github text-4xl"></i>
                </Link>
              </div>
              <a
                href="/docs/pradnyal-gandhi-resume.pdf"
                download
                className="bg-transparent flex gap-2 items-center justify-center border border-white rounded-2xl text-white font-medium py-2 px-4"
              >
                <i className="ion-android-download text-xl"></i>
                Download My Resume
              </a>
            </div>
          </div>

          {/* Experience Section */}
          <div className="lg:w-3/5 w-full">
            <ExperienceCard
              title="Shelfmark"
              role="Software Engineer"
              duration="Oct '23 - Present"
              points={[
                "Built 3 full-stack web apps using ML and computer vision for inventory and quality control.",
                "Used TypeScript, Next.js, Postgres, and Azure to build dashboards, SSO auth, and notifications.",
                "Automated CI/CD using Azure DevOps & GitHub Actions. Built tests with Cypress and Playwright.",
              ]}
            />

            <ExperienceCard
              title="Northeastern University"
              role="Teaching Assistant"
              duration="Jan '23 - Aug '23"
              points={[
                "Mentored a class of 70+ students in iOS, and Agile development providing valuable insights on best practices of Software Engineering",
                "Conducted brainstorming sessions with students, crafted and graded projects in Swift and Swift UI",
              ]}
            />

            <ExperienceCard
              title="Copart"
              role="UI Developer Intern"
              duration="Sept '22 - Jan '23"
              points={[
                "Modernized 4 apps using React, Redux, and Saga for REST APIs.",
                "Resolved bugs and improved user experience of legacy systems.",
                "Collaborated with stakeholders in Agile teams for design and testing.",
              ]}
            />

            <ExperienceCard
              title="Wealth42"
              role="Product Engineer"
              duration="July '20 - Nov '20"
              points={[
                "Built a fintech wealth tracking platform as part of a full-stack team.",
                "Developed backend pipelines in Python and dashboards in React.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
