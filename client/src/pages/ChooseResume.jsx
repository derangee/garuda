import React from "react";
import ResumeCards from "@/components/ChooseResume/ResumeCards";
import Topbar from "@/components/Topbar";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Link } from "react-router-dom"; // Import Link for navigation

const ChooseResume = () => {
  // Resume type data
  const resumeTypes = [
    {
      title: "Developer Resume",
      description:
        "Perfect for software engineers, web developers, and tech professionals. Highlights technical skills, coding projects, and development experience with a focus on technologies and programming languages.",
      comp: (
        <Link to="/resume/dev">
          <EvervaultCard text="Developer" />
        </Link>
      ),
      type: "Developer",
    },
    {
      title: "Researcher Resume",
      description:
        "Designed for academics, scientists, and research professionals. Emphasizes publications, research methodology, academic achievements, and specialized knowledge in your field of study.",
      comp: (
        <Link to="/resume/research">
          <EvervaultCard text="Research" />
        </Link>
      ),
      type: "Researcher",
    },
    {
      title: "Balanced Resume",
      description:
        "A versatile template suitable for all professions. Provides equal emphasis on skills, work experience, and educational background, making it perfect for career changers and generalists.",
      comp: (
        <Link to="/resume/balanced">
          <EvervaultCard text="Balanced" />
        </Link>
      ),
      type: "Balanced",
    },
  ];

  return (
    <>
      <Topbar />

      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Choose Your Resume Template
            </h1>
            <p className="text-xl text-gray-300">
              Select the template that best matches your career profile
            </p>
          </div>

          <div className="space-y-8">
            {resumeTypes.map((resume, index) => (
              <ResumeCards
                key={index}
                title={resume.title}
                description={resume.description}
                type={resume.type}
                comp={resume.comp} // Pass the EvervaultCard component wrapped in Link
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseResume;
